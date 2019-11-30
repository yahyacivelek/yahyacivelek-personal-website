<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
export default {
  name: 'Resume',

  data (){
    return {
      resumeJson: {
        'basics': {
          'name': 'Yahya Civelek',
          'label': 'Embedded Software Developer',
          'picture': '',
          'email': 'yahyacivelek@gmail.com',
          'phone': '+905336643526',
          'website': 'https://yahyacivelek.github.io',
          'summary': 'Embedded Software Developer & Data Science Enthusiast',
          'location': {
            'address': 'Fatih Mah. Resim İstanbul Sit. U/9 Sancaktepe',
            'postalCode': '',
            'city': 'Istanbul',
            'countryCode': 'TR',
            'region': 'Sancaktepe'
          },
          'profiles': [{
            'network': 'medium',
            'username': 'yahyacivelek',
            'url': 'https://medium.com/@yahyacivelek'
          },
          {
            'network': 'linkedin',
            'username': 'yahyacivelek',
            'url': 'https://www.linkedin.com/in/yahya-civelek/'
          },
          {
            'network': 'github',
            'username': 'yahyacivelek',
            'url': 'https://github.com/yahyacivelek'
          }
          ]
        },
        'work': [{
          'company': 'Nortel Netaş',
          'position': 'Carrier VoIP Technical Support Engineer',
          'website': 'http://www.netas.com.tr',
          'startDate': '2006-12-01',
          'endDate': '2008-04-01',
          'summary': 'Providing technical support to Nortel’s carrier grade customers in North America',
          'highlights': [
            'Reproducing the problems and testing the solutions in Lab environments',
            'Experienced on Sun Solaris OS, Linux, SIP, MGCP, MPCP, SS7, H.248/MEGACO, SNMP.'
          ]
        },
        {
          'company': 'Teknikom Elektronik Ltd.',
          'position': 'Embedded Hardware & Software Engineer',
          'website': 'http://www.teknikom.com',
          'startDate': '2008-04-01',
          'endDate': '2012-04-01',
          'summary': 'Designing & developing hardware & embedded software for analog phone (on PSTN, PBX, etc.) conversation recorders',
          'highlights': [
            'Programming languages: C',
            'software framework: QP (Quantum Leaps event driven framework)',
            'interfaces: USB, Ethernet',
            'MCU: Renesas M16C, MCF52235, NXP LPC1111 ARM Cortex-M0',
            'Hardware Design Skills & Tools: Altium Designer, small signal circuits, EMC compliant PCB design',
            'Version Control: SVN'
          ]
        },
        {
          'company': 'Arçelik Technology Systems Inc.',
          'position': 'Embedded Software Developer',
          'website': 'http://artesis.com',
          'startDate': '2012-04-01',
          'endDate': '2014-03-01',
          'summary': 'Porting induction motor predictive maintenance firmware to x86 and NXP LPC1788',
          'highlights': [
            'Programming languages: C',
            'software framework: QP (Quantum Leaps event driven framework)',
            'interfaces: RS485',
            'MCU: NXP LPC1788',
            'Version Control: SVN'
          ]
        },
        {
          'company': 'Arçelik Technology Systems Inc.',
          'position': 'Business Development Executive',
          'website': 'http://artesis.com',
          'startDate': '2014-03-01',
          'endDate': '2015-04-01',
          'summary': 'preparing business plan and specifications for Artesis’ predictive maintenance software according to market needs and feedback from the cus-tomers',
          'highlights': [
          ]
        },
        {
          'company': 'Panasonic Life Solutions Turkey',
          'position': 'Senior Embedded Software Developer',
          'website': 'https://lstr.panasonic.com',
          'startDate': '2015-04-01',
          'endDate': '2019-06-01',
          'summary': 'developing firmware for smart electricity meter communication (PLC, RF) modules, cleaning and analyzing collected data',
          'highlights': [
            'Programming language: C, C++, Python, JS',
            'MCU: Renesas RX610',
            'RTOS: RI600',
            'Tools for tests: QT, QT Creator, QTest',
            'Version Control: Git',
            'Managed a project with EnerjiSA about a smart electricity meter with two communication module',
            'Developed a demo head-end software using django, vuejs, docker containers',
            'Developed an AI algorithm which can detect the illegal electricity usage as well as its location using collected data as input. Patent Pending.',
            'Experience on machine learning, python, pandas, scikit-learn, keras',
            'Coded an algorithm to detect the phase of the power line which the smart meters are operated on by utilizing some publications'
          ]
        },
        {
          'company': 'Panasonic Life Solutions Turkey',
          'position': 'Embedded Software Responsible',
          'website': 'https://lstr.panasonic.com',
          'startDate': '2015-04-01',
          'endDate': '2019-06-01',
          'summary': 'preparing project plans, coordinating team to apply TDD, specific git branching model, continuous integration (ci)',
          'highlights': [
            'developing hd-plc driver, porting on embedded linux box',
            'MCU: AM3358',
            'Tools for tests: QT, QT Creator, QTest, Unity, CMock, Ceedling',
            'Version Control: Git'
          ]
        }],
        'volunteer': [],
        'education': [{
          'institution': 'Erciyes University',
          'area': 'Electronics Engineering',
          'studyType': 'Bachelor',
          'startDate': '1997-10-01',
          'endDate': '2002-06-01',
          'gpa': '2.8',
          'courses': []
        },
        {
          'institution': 'Bogazici University',
          'area': 'Biomedical Engineering',
          'studyType': 'MS',
          'startDate': '2002-09-15',
          'endDate': '2005-06-01',
          'gpa': '3.5',
          'courses': []
        }],
        'awards': [{
          // 'title': 'Award',
          // 'date': '2014-11-01',
          // 'awarder': 'Company',
          // 'summary': 'There is no spoon.'
        }],
        'publications': [{
          'name': 'New Hardware Design for CARDIOPAL',
          'publisher': 'National Symposium on Biomedical Engineering',
          'releaseDate': '2015-05-01',
          'website': '',
          'summary': 'New Hardware Design for Cardiac Passive Acustic Localization device which is aimed to visualize heart sounds using an acustic array'
        },
        {
          'name': 'Use of Industrial Big Data for “No Unplanned Downtime” at Tupras Refinery; No new hardware, no sensors, no cabling, no equipment shutdown',
          'publisher': '"Austorque Machines2014”, Sydney Australia',
          'releaseDate': '2014',
          'website': '',
          'summary': ''
        }],
        'skills': [{
          'name': '',
          'level': 'Master',
          'keywords': [
            'HTML',
            'CSS',
            'Javascript'
          ]
        }],
        'languages': [{
          'language': 'English',
          'fluency': 'Native speaker'
        }],
        'interests': [{
          'name': 'Wildlife',
          'keywords': [
            'Ferrets',
            'Unicorns'
          ]
        }],
        'references': [{
          'name': 'Jane Doe',
          'reference': 'Reference...'
        }]
      }
    }
  }
}
</script>