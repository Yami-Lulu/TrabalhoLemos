#include <Arduino_FreeRTOS.h>


#define pedVerde= 9  
// Define os pinos que serao utilizados

#define pedVermelho = 8
#define carroVerde = 12

#define carroAmarelo = 11

#define carroVermelho = 10


void task_led( void *pvParameters );


void setup() // Define os pinos como saidas

{
  pinMode(pedVerde, OUTPUT);
  
pinMode(pedVermelho, OUTPUT);
  
pinMode(carroVerde, OUTPUT);
  
pinMode(carroAmarelo, OUTPUT);
  
pinMode(carroVermelho, OUTPUT);
 
  
digitalWrite(carroVerde, HIGH);
 // Coloca na posiçao inicial. Somente o verde dos carros e o vermelho dos pedestres acesos
  
digitalWrite(carroVerde, LOW);
  
digitalWrite(carroVerde, LOW);
  
digitalWrite(pedVerde, LOW);
  
digitalWrite(pedVermelho, HIGH);


xTaskCreate(
    
task_led
    ,  
(const portCHAR *)"LED"
    ,
  128  
    ,
  NULL
    , 
 1  
    ,
  NULL );


}

void loop()
{
  
void task_led( void *pvParameters ){

  (void) pvParameters;

  digitalWrite(carroVerde, HIGH);
 // Acende o verde dos carros e o vermelho dos pedestres

  digitalWrite(pedVermelho, HIGH);
  
  delay(5000); 
// Aguarda 5 segundos
  
digitalWrite(carroVerde, LOW);

  digitalWrite(carroAmarelo, HIGH);
 // apaga o verde dos carros e acende o amarelo
  delay(3000);
 // aguarda mais 3 segundos
  digitalWrite(carroAmarelo, LOW);
 // apaga o amarelo dos carros e acende o vermelho
  
digitalWrite(carroVermelho, HIGH);

  digitalWrite(pedVermelho, LOW); 
// apaga o vermelho dos pedestres e acende o verde
  
digitalWrite(pedVerde, HIGH);
  
delay(5000);  
// aguarda mais 5 segundos
  
digitalWrite(pedVerde, LOW);
  
for(int x = 0; x<5; x++)
 // Pisca o vermelho dos pedestres
  {
 
   digitalWrite(pedVermelho, HIGH);
 
   delay(1050);
   
 digitalWrite(pedVermelho, LOW);
 
   delay(250);
}
  }
  
digitalWrite(carroVermelho, LOW); 
 
}
}