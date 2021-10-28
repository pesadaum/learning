
// PIC16F887 Configuration Bit Settings

// 'C' source line config statements

// CONFIG1
#pragma config FOSC = INTRC_NOCLKOUT// Oscillator Selection bits (INTOSCIO oscillator: I/O function on RA6/OSC2/CLKOUT pin, I/O function on RA7/OSC1/CLKIN)
#pragma config WDTE = OFF       // Watchdog Timer Enable bit (WDT disabled and can be enabled by SWDTEN bit of the WDTCON register)
#pragma config PWRTE = OFF      // Power-up Timer Enable bit (PWRT disabled)
#pragma config MCLRE = ON       // RE3/MCLR pin function select bit (RE3/MCLR pin function is MCLR)
#pragma config CP = OFF         // Code Protection bit (Program memory code protection is disabled)
#pragma config CPD = OFF        // Data Code Protection bit (Data memory code protection is disabled)
#pragma config BOREN = ON       // Brown Out Reset Selection bits (BOR enabled)
#pragma config IESO = ON        // Internal External Switchover bit (Internal/External Switchover mode is enabled)
#pragma config FCMEN = ON       // Fail-Safe Clock Monitor Enabled bit (Fail-Safe Clock Monitor is enabled)
#pragma config LVP = ON         // Low Voltage Programming Enable bit (RB3/PGM pin has PGM function, low voltage programming enabled)

// CONFIG2
#pragma config BOR4V = BOR40V   // Brown-out Reset Selection bit (Brown-out Reset set to 4.0V)
#pragma config WRT = OFF        // Flash Program Memory Self Write Enable bits (Write protection off)

// #pragma config statements should precede project file includes.
// Use project enums instead of #define for ON and OFF.

#include <xc.h>
#include <stdlib.h>


// ENTRADAS
#define BUTTON_START PORTAbits.RA4
#define BUTTON_GREEN PORTAbits.RA3
#define BUTTON_RED PORTAbits.RA2
#define BUTTON_BLUE PORTAbits.RA1
#define BUTTON_YELLOW PORTAbits.RA0

// SAIDAS
#define BUZZER PORTBbits.RB4
#define LED_GREEN PORTBbits.RB3
#define LED_RED PORTBbits.RB2
#define LED_BLUE PORTBbits.RB1
#define LED_YELLOW PORTBbits.RB0

// AUXILIARES
#define _XTAL_FREQ 4000000

// GLOBAIS
int seqGerada[12];
int seqInserida[12];

/*
 *  0 -> jogando
 *  1 -> vitória
 * -1 -> derota
 */
int flagVitDerr = 0; 

void setup(void){
  //entradas
  PORTA = 0; // limpa PORTA
  TRISA |= 1; // RA4 ate RA0 como entradas 
  ANSEL = 0; // PORTA como i/o digital
 
  //saidas
  PORTB = 0;
  TRISB |= 0; // PORTB como saidas
  ANSELH = 0;
  
  //timers
  
}

void geraMovimentos(){
  for(int i = 0; i <=12; i++)
    seqGerada[i] = (rand() % 4);
}

int mapaEntrada()
{
  while (1)
  {
    if (BUTTON_YELLOW == 1)
    {
      return 0;
    }
    if (BUTTON_BLUE == 1)
    {
      return 1;
    }
    if (BUTTON_RED == 1)
    {
      return 2;
    }
    if (BUTTON_GREEN == 1)
    {
      return 3;
    }
  }
}

void mostraMovimentos(int i){
  for (int j = 0; j <= i; j++){
    switch(seqGerada[j]){
      case 0:
        LED_YELLOW = 1;
        __delay_ms(200);
        LED_YELLOW = 0;
        // LIGA SOM
        break;
      case 1:
        LED_BLUE = 1;
        __delay_ms(200);
        LED_BLUE = 0;
        // LIGA SOM
        break;
      case 2:
        LED_RED = 1;
        __delay_ms(200);
        LED_RED = 0;
        // LIGA SOM
        break;
      case 3:
        LED_GREEN = 1;
        __delay_ms(200);
        LED_GREEN = 0;
        // LIGA SOM
        break;
    }
  } 
}

void leMovimentos(){
  int index = 0;
  while(index <= 12){
    mostraMovimentos(index);
    seqInserida[index] = mapaEntrada();
    if (seqGerada[index] == seqInserida[index]){
      index++;
    }if (index == 12){
      flagVitDerr = 1;
      break;
    }
  } 
}

void delay_tmr0 (void){

}

void start (void){
  while(BUTTON_START == 0){
  // não começa o jogo e fica piscando todos os led's
    PORTB = 1;
    __delay_ms(1000);
    PORTB = 0;
    __delay_ms(1000);

  }
  while (flagVitDerr == 0) {
    geraMovimentos();
    leMovimentos();
    }
  }




void main(void) {
  setup();
  start();
  return;
}
