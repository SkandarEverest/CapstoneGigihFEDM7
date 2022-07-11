
#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#include <Firebase_ESP_Client.h>

// Provide the token generation process info.
#include <addons/TokenHelper.h>

// Provide the RTDB payload printing info and other helper functions.
#include <addons/RTDBHelper.h>

/* 1. Define the WiFi credentials */
#define WIFI_SSID "KANAYAKANBaru2"
#define WIFI_PASSWORD "SOENARMO"
//#define WIFI_SSID "Hotspot Firman"
//#define WIFI_PASSWORD "085523575949"

// For the following credentials, see examples/Authentications/SignInAsUser/EmailPassword/EmailPassword.ino

/* 2. Define the API Key */
#define API_KEY "AIzaSyBvBycIR6Je8SLC4pERxCASDklUjROqT3c"

/* 3. Define the RTDB URL */
#define DATABASE_URL "https://gigihfedm7-default-rtdb.asia-southeast1.firebasedatabase.app" //<databaseName>.firebaseio.com or <databaseName>.<region>.firebasedatabase.app

/* 4. Define the user Email and password that alreadey registerd or added in your project */
#define USER_EMAIL "fadhil@gmail.com"
#define USER_PASSWORD "naruto"

// Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;

unsigned long count = 0;

///////Ultrasonic////////////
const int trigPin = 12;
const int echoPin = 14;

//define sound velocity in cm/uS
#define SOUND_VELOCITY 0.034
#define CM_TO_INCH 0.393701

long duration;
float distanceCm = 0.0;
float sumdistanceCm = 0.0;
float ratarataKetinggianAir = 0.0;
///////Ultrasonic////////////

////////////PH///////////////
const int ph_Pin = A0;

float PH_step;
int nilai_analog_PH;
double TeganganPh;

//untuk kalibrasi
float PH4 = 3.3;
float PH7 = 2.6;

float Po = 0.0;
float sumPo = 0.0;
float ratarataPH = 0.0;
////////////PH///////////////

int counter;

void setup()
{

  Serial.begin(115200);
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
  pinMode (ph_Pin, INPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the user sign in credentials */
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; // see addons/TokenHelper.h

#if defined(ESP8266)
  // In ESP8266 required for BearSSL rx/tx buffer for large data handle, increase Rx size as needed.
  fbdo.setBSSLBufferSize(2048 /* Rx buffer size in bytes from 512 - 16384 */, 2048 /* Tx buffer size in bytes from 512 - 16384 */);
#endif

  // Limit the size of response payload to be collected in FirebaseData
  fbdo.setResponseSize(2048);

  Firebase.begin(&config, &auth);

  // Comment or pass false value when WiFi reconnection will control by your code or third party library
  Firebase.reconnectWiFi(true);

  Firebase.setDoubleDigits(5);

  config.timeout.serverResponse = 10 * 1000;

}

void loop()
{

  // Firebase.ready() should be called repeatedly to handle authentication tasks.

  Serial.print("Counter : ");
  Serial.println(counter+1);

  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);

  // Calculate the distance
  distanceCm = duration * SOUND_VELOCITY / 2;
  sumdistanceCm += distanceCm;


  // Prints the distance on the Serial Monitor
  Serial.print("Ketinggian Air (cm): ");
  Serial.println(distanceCm);

  if (
    nilai_analog_PH = analogRead(ph_Pin)) {
    Serial.print("Nilai ADC Ph : ");
    Serial.println(nilai_analog_PH);
    TeganganPh = 3.3 / 1024.0 * nilai_analog_PH;
    Serial.print("TeganganPh: ");
    Serial.println(TeganganPh, 3);

    PH_step =  (PH4 - PH7) / 3;
    Po = 7.00 + ((PH7 - TeganganPh) / PH_step);
    sumPo += Po;

    Serial.print("Nilai PH cairan : ");
    Serial.println(Po, 2);
  }

  counter++;
  Serial.println();
  
  if (Firebase.ready() && counter == 5)
  {
    delay(600);
    
    sendDataPrevMillis = millis();
    ratarataKetinggianAir = sumdistanceCm / 5;
    ratarataPH = sumPo / 5;
    counter = 0;

    char mydata1[30];
    snprintf(mydata1, sizeof(mydata1), "%0.2f", ratarataKetinggianAir );
    double val1 = atof(mydata1);
    Serial.printf("Set float... %s\n", Firebase.RTDB.setFloat(&fbdo, F("/sensor/ketinggianAir"), val1) ? "ok" : fbdo.errorReason().c_str());
    delay(600);
    char mydata2[30];
    snprintf(mydata2, sizeof(mydata2), "%0.2f", ratarataPH );
    double val2 = atof(mydata2);
    Serial.printf("Set float... %s\n", Firebase.RTDB.setFloat(&fbdo, F("/sensor/phAir"), val2) ? "ok" : fbdo.errorReason().c_str());

    sumdistanceCm = 0.0;
    sumPo = 0;

    Serial.println();

  }
  
  delay(3000);
}
