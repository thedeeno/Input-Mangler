if (typeof(__KEYSYMS__) == 'undefined') {
__KEYSYMS__ = 1;


/* key syms imported from /usr/include/linux/input.h */

EV_SYN                 = 0x00;
EV_KEY                 = 0x01;
EV_REL                 = 0x02;    
EV_ABS                 = 0x03;    
EV_MSC                 = 0x04;    
EV_SW                  = 0x05;    
EV_LED                 = 0x11;    
EV_SND                 = 0x12;    
EV_REP                 = 0x14;    
EV_FF                  = 0x15;    
EV_PWR                 = 0x16;    
EV_FF_STATUS           = 0x17;    
EV_MAX                 = 0x1f; 

/* this one is NOT a system event type, it is emitted 'artificially' by kbd-mangler */
EV_TIMER = 0x20

REL_X                  = 0x00;
REL_Y                  = 0x01;    
REL_Z                  = 0x02;    
REL_RX                 = 0x03;    
REL_RY                 = 0x04;    
REL_RZ                 = 0x05;    
REL_HWHEEL             = 0x06;    
REL_DIAL               = 0x07;    
REL_WHEEL              = 0x08;    
REL_MISC               = 0x09;    
REL_MAX                = 0x0f; 

BTN_MOUSE              = 0x110;
BTN_LEFT               = 0x110;
BTN_RIGHT              = 0x111;
BTN_MIDDLE             = 0x112;
BTN_SIDE               = 0x113;
BTN_EXTRA              = 0x114;
BTN_FORWARD            = 0x115;
BTN_BACK               = 0x116;
BTN_TASK               = 0x117;

SYN_REPORT              = 0;
SYN_CONFIG              = 1;

KEY_RESERVED		 = 0;
KEY_ESC			 = 1;
KEY_1			 = 2;
KEY_2			 = 3;
KEY_3			 = 4;
KEY_4			 = 5;
KEY_5			 = 6;
KEY_6			 = 7;
KEY_7			 = 8;
KEY_8			 = 9;
KEY_9			 = 10;
KEY_0			 = 11;
KEY_MINUS		 = 12;
KEY_EQUAL		 = 13;
KEY_BACKSPACE		 = 14;
KEY_TAB			 = 15;
KEY_Q			 = 16;
KEY_W			 = 17;
KEY_E			 = 18;
KEY_R			 = 19;
KEY_T			 = 20;
KEY_Y			 = 21;
KEY_U			 = 22;
KEY_I			 = 23;
KEY_O			 = 24;
KEY_P			 = 25;
KEY_LEFTBRACE		 = 26;
KEY_RIGHTBRACE		 = 27;
KEY_ENTER		 = 28;
KEY_LEFTCTRL		 = 29;
KEY_A			 = 30;
KEY_S			 = 31;
KEY_D			 = 32;
KEY_F			 = 33;
KEY_G			 = 34;
KEY_H			 = 35;
KEY_J			 = 36;
KEY_K			 = 37;
KEY_L			 = 38;
KEY_SEMICOLON		 = 39;
KEY_APOSTROPHE		 = 40;
KEY_GRAVE		 = 41;
KEY_LEFTSHIFT		 = 42;
KEY_BACKSLASH		 = 43;
KEY_Z			 = 44;
KEY_X			 = 45;
KEY_C			 = 46;
KEY_V			 = 47;
KEY_B			 = 48;
KEY_N			 = 49;
KEY_M			 = 50;
KEY_COMMA		 = 51;
KEY_DOT			 = 52;
KEY_SLASH		 = 53;
KEY_RIGHTSHIFT		 = 54;
KEY_KPASTERISK		 = 55;
KEY_LEFTALT		 = 56;
KEY_SPACE		 = 57;
KEY_CAPSLOCK		 = 58;
KEY_F1			 = 59;
KEY_F2			 = 60;
KEY_F3			 = 61;
KEY_F4			 = 62;
KEY_F5			 = 63;
KEY_F6			 = 64;
KEY_F7			 = 65;
KEY_F8			 = 66;
KEY_F9			 = 67;
KEY_F10			 = 68;
KEY_NUMLOCK		 = 69;
KEY_SCROLLLOCK		 = 70;
KEY_KP7			 = 71;
KEY_KP8			 = 72;
KEY_KP9			 = 73;
KEY_KPMINUS		 = 74;
KEY_KP4			 = 75;
KEY_KP5			 = 76;
KEY_KP6			 = 77;
KEY_KPPLUS		 = 78;
KEY_KP1			 = 79;
KEY_KP2			 = 80;
KEY_KP3			 = 81;
KEY_KP0			 = 82;
KEY_KPDOT		 = 83;

KEY_ZENKAKUHANKAKU	 = 85;
KEY_102ND		 = 86;
KEY_F11			 = 87;
KEY_F12			 = 88;
KEY_RO			 = 89;
KEY_KATAKANA		 = 90;
KEY_HIRAGANA		 = 91;
KEY_HENKAN		 = 92;
KEY_KATAKANAHIRAGANA	 = 93;
KEY_MUHENKAN		 = 94;
KEY_KPJPCOMMA		 = 95;
KEY_KPENTER		 = 96;
KEY_RIGHTCTRL		 = 97;
KEY_KPSLASH		 = 98;
KEY_SYSRQ		 = 99;
KEY_RIGHTALT		 = 100;
KEY_LINEFEED		 = 101;
KEY_HOME		 = 102;
KEY_UP			 = 103;
KEY_PAGEUP		 = 104;
KEY_LEFT		 = 105;
KEY_RIGHT		 = 106;
KEY_END			 = 107;
KEY_DOWN		 = 108;
KEY_PAGEDOWN		 = 109;
KEY_INSERT		 = 110;
KEY_DELETE		 = 111;
KEY_MACRO		 = 112;
KEY_MUTE		 = 113;
KEY_VOLUMEDOWN		 = 114;
KEY_VOLUMEUP		 = 115;
KEY_POWER		 = 116;
KEY_KPEQUAL		 = 117;
KEY_KPPLUSMINUS		 = 118;
KEY_PAUSE		 = 119;

KEY_KPCOMMA		 = 121;
KEY_HANGUEL		 = 122;
KEY_HANJA		 = 123;
KEY_YEN			 = 124;
KEY_LEFTMETA		 = 125;
KEY_RIGHTMETA		 = 126;
KEY_COMPOSE		 = 127;

KEY_STOP		 = 128;
KEY_AGAIN		 = 129;
KEY_PROPS		 = 130;
KEY_UNDO		 = 131;
KEY_FRONT		 = 132;
KEY_COPY		 = 133;
KEY_OPEN		 = 134;
KEY_PASTE		 = 135;
KEY_FIND		 = 136;
KEY_CUT			 = 137;
KEY_HELP		 = 138;
KEY_MENU		 = 139;
KEY_CALC		 = 140;
KEY_SETUP		 = 141;
KEY_SLEEP		 = 142;
KEY_WAKEUP		 = 143;
KEY_FILE		 = 144;
KEY_SENDFILE		 = 145;
KEY_DELETEFILE		 = 146;
KEY_XFER		 = 147;
KEY_PROG1		 = 148;
KEY_PROG2		 = 149;
KEY_WWW			 = 150;
KEY_MSDOS		 = 151;
KEY_COFFEE		 = 152;
KEY_DIRECTION		 = 153;
KEY_CYCLEWINDOWS	 = 154;
KEY_MAIL		 = 155;
KEY_BOOKMARKS		 = 156;
KEY_COMPUTER		 = 157;
KEY_BACK		 = 158;
KEY_FORWARD		 = 159;
KEY_CLOSECD		 = 160;
KEY_EJECTCD		 = 161;
KEY_EJECTCLOSECD	 = 162;
KEY_NEXTSONG		 = 163;
KEY_PLAYPAUSE		 = 164;
KEY_PREVIOUSSONG	 = 165;
KEY_STOPCD		 = 166;
KEY_RECORD		 = 167;
KEY_REWIND		 = 168;
KEY_PHONE		 = 169;
KEY_ISO			 = 170;
KEY_CONFIG		 = 171;
KEY_HOMEPAGE		 = 172;
KEY_REFRESH		 = 173;
KEY_EXIT		 = 174;
KEY_MOVE		 = 175;
KEY_EDIT		 = 176;
KEY_SCROLLUP		 = 177;
KEY_SCROLLDOWN		 = 178;
KEY_KPLEFTPAREN		 = 179;
KEY_KPRIGHTPAREN	 = 180;

KEY_F13			 = 183;
KEY_F14			 = 184;
KEY_F15			 = 185;
KEY_F16			 = 186;
KEY_F17			 = 187;
KEY_F18			 = 188;
KEY_F19			 = 189;
KEY_F20			 = 190;
KEY_F21			 = 191;
KEY_F22			 = 192;
KEY_F23			 = 193;
KEY_F24			 = 194;

KEY_PLAYCD		 = 200;
KEY_PAUSECD		 = 201;
KEY_PROG3		 = 202;
KEY_PROG4		 = 203;
KEY_SUSPEND		 = 205;
KEY_CLOSE		 = 206;
KEY_PLAY		 = 207;
KEY_FASTFORWARD		 = 208;
KEY_BASSBOOST		 = 209;
KEY_PRINT		 = 210;
KEY_HP			 = 211;
KEY_CAMERA		 = 212;
KEY_SOUND		 = 213;
KEY_QUESTION		 = 214;
KEY_EMAIL		 = 215;
KEY_CHAT		 = 216;
KEY_SEARCH		 = 217;
KEY_CONNECT		 = 218;
KEY_FINANCE		 = 219;
KEY_SPORT		 = 220;
KEY_SHOP		 = 221;
KEY_ALTERASE		 = 222;
KEY_CANCEL		 = 223;
KEY_BRIGHTNESSDOWN	 = 224;
KEY_BRIGHTNESSUP	 = 225;
KEY_MEDIA		 = 226;

KEY_SWITCHVIDEOMODE	 = 227;
KEY_KBDILLUMTOGGLE	 = 228;
KEY_KBDILLUMDOWN	 = 229;
KEY_KBDILLUMUP		 = 230;

KEY_UNKNOWN		 = 240;


/* Leds */
LED_NUML              =  0x00
LED_CAPSL             =  0x01
LED_SCROLLL           =  0x02
LED_COMPOSE           =  0x03
LED_KANA              =  0x04
LED_SLEEP             =  0x05
LED_SUSPEND           =  0x06
LED_MUTE              =  0x07
LED_MISC              =  0x08
LED_MAIL              =  0x09
LED_CHARGING          =  0x0a
LED_MAX               =  0x0f
LED_CNT               =  (LED_MAX+1)



/* Constants used by some scripts */
SHIFT = 1000; // left/right shift


} // __KEYSYMS__

