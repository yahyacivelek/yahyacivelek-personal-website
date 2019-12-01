<template>
  <q-page class="flex flex-center" style="font-family: Montserrat;">
    <div class="row q-gutter-sm q-mb-xl" style="max-width: 1200px">
      <div class="col-12">
        <q-card>
          <q-parallax
            src="statics/code.jpg"
            :height="400"
          />
          <q-item-section>
            <div class="row text-center q-gutter-sm q-ma-sm">
              <div class="col-12">
                <q-avatar size="200px">
                  <img src="statics/avatar.png">
                </q-avatar>
              </div>
              <div class="col-12">
                <div class="text-h4">{{resumeJson.basics.name}}</div>
                <div class="q-mt-xs">{{resumeJson.basics.summary}}</div>
              </div>
              <div class="col-12">
                <span v-for="(pro,i) in profiles" :key="i">
                  <q-btn flat :icon="pro.icon" />
                </span>
              </div>
            </div>
          </q-item-section>
        </q-card>
      </div>
      <div class="col-12">
        <q-card class="q-pl-md">
          <q-timeline color="secondary" class="q-pt-md">
            <q-timeline-entry heading tag="h3">
              Working History
            </q-timeline-entry>

            <q-timeline-entry
              v-for="(work, i) in workHistoryList"
              :key="i"
              :title="work.position"
              :subtitle="work.startDate"
            >
              <div>
                <div class="text-italic">{{work.company}}</div>
                <div class="q-mt-md">{{work.summary}}</div>
                <div>
                  <q-list dense>
                    <q-item v-for="(hl,i) in work.highlights" :key="i" clickable>
                      <q-item-section>{{hl}}</q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </q-timeline-entry>
          </q-timeline>
        </q-card>
      </div>
      <div class="col-12">
        <q-card class="q-pa-md">
          <q-item-section>
            <div class="text-h3 q-mb-md">Publications</div>
            <q-list>
              <q-item v-for="(pub,i) in resumeJson.publications" :key="i" clickable>
                <q-item-section>
                  <q-item-label>{{pub.name}}</q-item-label>
                  <q-item-label caption><span>{{pub.publisher}}, {{pub.releaseDate}}</span></q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item-section>
        </q-card>
      </div>
      <div class="col-12 q-pt-sm">
        <q-card class="q-pa-md">
          <q-item-section>
            <div class="text-h3 q-mb-md">Patents</div>
            <q-list>
              <q-item v-for="(pat,i) in resumeJson.patents" :key="i" clickable>
                <q-item-section>
                  <q-item-label>{{pat.name}}</q-item-label>
                  <q-item-label caption><span>{{pat.applicationNo}}, {{pat.status}}</span></q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Resume',

  data () {
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
            'icon': 'fab fa-medium',
            'username': 'yahyacivelek',
            'url': 'https://medium.com/@yahyacivelek'
          },
          {
            'network': 'linkedin',
            'icon': 'fab fa-linkedin',
            'username': 'yahyacivelek',
            'url': 'https://www.linkedin.com/in/yahya-civelek/'
          },
          {
            'network': 'github',
            'icon': 'fab fa-github-square',
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
        'patents': [{
          'name': 'Enerji Tüketimi Tahmini ve Kaçak Enerji Kullanımının Lokalizasyonu (Predictingfraud location in low-voltage power networks)',
          'applicationNo': '2018/06279',
          'status': 'Pending'
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
  },

  computed: {
    workHistoryList () {
      return this.resumeJson.work.slice().reverse()
    },

    profiles () {
      return this.resumeJson.basics.profiles
    }
  }
}
</script>

<style scoped>
  .my-card {
    width: 100%;
    max-width: 500px;
  }
</style>
