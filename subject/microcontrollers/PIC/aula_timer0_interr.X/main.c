
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

void __interrupt() ISR(void){
  if (INTCONbits.T0IF == 1){
    TMR0 = 155;
    PORTA ^= 0X01;
    INTCONbits.T0IF = 0; 
  }
}

void setup(void){
    OPTION_REGbits.T0CS = 0; // timer0 como temporizador
    OPTION_REGbits.PSA = 1; // não usa o prescaler (assiciado ao WTD)
    TRISAbits.TRISA0 = 1; // RBO como saida
    ANSEL = 0;  // PORTA como I/O digital
    PORTA = 0; // PORTA com valor 0
    INTCONbits.T0IF = 0;
    TMR0 = 155;
    INTCONbits.T0IE = 1; // habilita o funcionamento da flag de interrup
    INTCONbits.GIE = 1; // habilita chave geral de interrup
}

void loop(void){
    while (1) {}
}

void main(void) {
    
    setup();
    loop();

    return;
}