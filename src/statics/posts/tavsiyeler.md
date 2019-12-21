
# Gömülü Yazılım Geliştirirken Dikkat Etmeniz Gereken 8 Madde

STFA Grup kurucularından Feyzi Akkaya'ya ait şu aşağıdaki harika grafiği paylaşarak yazıya giriş yapmak istiyorum.

<div class="q-mb-lg text-center">
  <img src="../statics/tecrube-igrisi.jpg" />
</div>

Müthiş bir birikimin kağıda dökülmüş hali olduğu belli olan bu grafikten de görüleceği üzere mezun olduktan sonra geçen uzun bir **Tecrübesizlik Dönemi** var.

Benim de meslek hayatımdaki 12. yılım ve bu grafiğe neredeyse tıpatıp uyduğumu düşünüyorum.

Bu 12 yılın neredeyse 10 yılı "Tecrübesiz" olduğumu idrak etmekle geçti. Bir çok yanlış yaptım ve şimdi şimdi sanırım biraz da olsa doğru yolda olduğumu düşünüyorum. Tabi Allah ömür verirse gidecek daha çok yolumuz var.

Bu yazıyı yazmamdaki sebep ise biraz bencilce.

Yıllar içerisinde yaptığım yanlışları tekrar etmemem için bir neden ve hatırlatma olacak bu yazı benim için.

Dileyen de faydalanabilir...

Özelde **Gömülü Yazılım Mühendisleri (Embedded Software Developers)** için hazırlansa da başka olanda çalışan bir çok yazılımcıya da hitap edebileceğini düşünüyorum.

Başlıyoruz...

## **1. Tecrit Altında Çalışmayın**

<div class="q-mb-lg text-center">
  <img src="../statics/isolation.jpg" />
</div>

Tecrit sizin en büyük düşmanınızdır!

Tecritten kastım nedir?

Örneğin bir projede bir mikro-denetleyici üzerinde yazılım geliştiriyorsunuz. Eğer yazılımı geliştirirken hiç kimse ile münazara etmeden mimariyi kendiniz hazırlıyor, kullanacağınız araçları kendiniz seçiyor, yöntemleri kendiniz belirliyor ve yazdığınız kodu sizden başka bir Allah'ın kulu görmüyorsa tecrit altındasınız demektir.

Bu durumdan en kısa zamanda koşarak kaçmanız gerekir.

Tecrit altında çalışırken mahrum olacağınız kazanımlar şöyle sıralanabilir:

- Bir problemi çözerken farklı bakış açılarına sahip geliştiricilerle tartışmak ve konuyu analiz etmek verimi oldukça artırır. Ayrıca bu kariyeriniz açısından da daha olumludur çünkü takım çalışanları birbirlerinin teknik bilgi dağarcığından faydalanıp kariyerlerindeki boşlukları daha hızlı doldururlar.

- Zorlu bir problemle uğraşırken motivasyonunuz daha yüksek olur.

- Yazdığınız kodun diğer geliştiriciler tarafından kontrol edilmesi hataların erkenden tespitini kolaylaştırır.

- Birlikte geliştirme yapmak CI/CD, TDD, version control sistemlerini etkin kullanma, iyi bir dokümantasyon gibi artık gömülü yazılım camiasında da kabul görmeye başlayan yöntemleri kullanmanız için sizi zorlar.

- Takımdakilerden biri işten ayrıldığında yapılan işi yakından bilen en az bir kişi daha olacağı için projenin devamı ve süresi tehlikeye girmeyecektir.

Tecrit altında çalışmanın size tek faydası kimse size karışmadan istediğiniz yeni teknolojiyi denemenize olanak tanımasıdır. Bunun dışında geçirilen zaman size külliyen zarardır, özellikle yeterli öz disipline sahip değilseniz.

## **2. En iyi uygulamaları (best practices) bulun**

<div class="q-mb-lg text-center">
  <img src="../statics/best-practice.jpg" />
</div>

Her ne kadar gömülü yazılım özelinde en iyi uygulamalara ulaşmak nispeten daha zor olsa da, eskisine nazaran çok daha kolay olduğunu söylemek yanlış olmaz sanırım.

Herhangi bir işe başlarken yöntem hakkında karar vermeden önce mutlaka "bu işi en iyi şekilde nasıl yapabilirim?", "biri bu yoldan daha önce geçmiş olmalı" diye düşünüp kısa bir araştırma yapmalı veya bir bilene danışmalı.

Bunun için tabi internet en güzel kaynak. Github üzerinde düşündüğünüz işi yapan bir açık kaynak kod parçası kuvvetle muhtemel olacaktır.

Olmadı stackoverflow.com ne güne duruyor?

Hatta cüzi bir ücret vererek dünyada bu işi en iyi yapan kişilerden mentorluk bile alabilirsiniz (codementor.io)

## **3. Kod yazmayı erteleyin**

<div class="q-mb-lg text-center">
  <img src="../statics/stop-coding.jpg" />
</div>

Biliyorum...

Bütün hücrelerinizle bir an önce klavyenin başına geçip o muazzam lezzetli spagetti kodlarınızı tuşlamak istiyorsunuz.

Yapmayın...

Gereksinimleri tam olarak belirlemeden, mimariyi ve tasarımı tam olarak oluşturmadan, birlikte çalışacağınız kişilerle ortak bir zeminde anlaşmadan bu işe girişmeyin.

"Kervan yolda düzülür" diyerek önce kod yazmaya başlarsanız, daha sonra karşılaşacağınız sorunlar size çok zaman kaybettireceği gibi tadınızı tuzunuzu da kaçıracaktır.

Hatta kod yazarken bile kod yazmayı erteleyin. Örneğin bir değişkene isim mi vereceksiniz. Bu vereceğiniz ismi başka kişilerin veya sizin gelecekteki versiyonunuzun da okuyup anlaması gerektiğini unutmayın. Düşünmeye daha fazla zaman ayırın, aynı durumdaki diğer geliştiricilerin nasıl isimlendirme yaptığını araştırın, öyle verin ismi.

## **4. Yazılımcı mısınız yoksa donanımcı mı? Karar Verin!**

<div class="q-mb-lg text-center" style="hight: auto;">
  <img src="../statics/yol-ayrimi.jpg" />
</div>

Bu durum bizim mesleğe has bir durum...

Şematiklerin hazırlanması, PCB kartının tasarımı, prototiplerin çalışır hale getirilmesiyle geçen koskoca bir zamandan sonra hoop şimdi de yazılımı hazırlayayım.

Eğer imkan ve kaynaklarınız kısıtlı ve proje üzerinde ancak bir mühendis çalışabiliyorsa bunu anlarım.

Ancak bu durum yukarıdaki durumdan azade bilinçli bir tercihse kusura bakmayın ama bunun çok yanlış olduğunu düşünüyorum.

Her ne kadar gömülü sistem mühendisi klasik bir yazılımcıya göre donanımla daha içli dışlı olsa da, bir donanım tasarımcısı ile gömülü yazılımcının yaptığı işler oldukça farklıdır.

Her iki alanda eşit şekilde çalışmak iki alanda da uzmanlaşmanızı geciktirecek, hatta belki de engelleyecektir. Hızlı uzmanlaşmak artan rekabet koşularında hayatidir. Her iki alan da derya denizdir ve öğrenilecek çok şey vardır.

Bundan dolayı eğer imkanınız varsa, dahi falan değilseniz ve uzmanlaşmak istiyorsanız bir karar verin. Donanımcı mı olacaksınız, yoksa yazılımcı mı?

Mesleğe çok uzak olmayan farklı kaynaklardan beslenin. Sorunların çözümlerine farklı açılardan yaklaşmanızı ve yenilikçi yöntemler geliştirmenizi sağlar.

## **5. Çalışan Koda Dokunma**

<div class="q-mb-lg text-center" style="hight: auto;">
  <img src="../statics/calisan-code.jpg" />
</div>

Kendinden önceki yazılımcıyı eleştirmeyen yazılımcı hiç gördünüz mü bilmiyorum ama ben daha önce hiç böyle biriyle müşerref olmadım.

Zatımı da bundan gayrı tutmuyorum.

Selef yazılımcının bir problemi çözüş biçimi, kullandığı metotlar, notasyonlar, kod stili, indentation olarak boşluk mu tab mı kullandığı vs. sizinkinden çok farklı olabilir. Bu onun yanlış olduğu anlamına gelmez.

Diyelim ki kod apaçık yanlış pratikler içeriyor. Örneğin, kesme (interrupt) içerisindeki rutin çok uzun veya gereğinden fazla global değişken kullanılmış. Bu durumda ne yapıyoruz?

Hemen kodu değiştirmeye mi başlıyoruz?

Tabi ki hayır.

Bu "refactoring" denilen durum düşündüğünüzden çok daha ciddi bir iş. 

Öncesinde planlanmalı, testler tasarlanmalı ve tek satır değiştirmeden 40 defa düşünülmeli. Aksi takdirde istenmeyen sonuçlar doğurması kuvvetle muhtemel.

## **6. Bir version kontrol sistemi (VCS) öğrenin ve aktif kullanın**
<div style="text-align:center">
  <img src="https://git-scm.com/images/logo@2x.png" />
</div>

Yıl olmuş 2020!

Hala bir **VCS** kullanmıyorsanız bir an önce incelikleriyle öğrenmenizi ve uygulamanızı tavsiye ederim.

Bu yazıda VCS kullanmanın neden gerekli olduğuna değinmeyeceğim. Dileyen [şuradan](https://www.atlassian.com/git/tutorials/what-is-version-control) okuyup öğrenebilir.

Son zamanlarda en çok tercih edilen VCS **Git**'tir. Ben de onu kullanmanızı şiddetle tavsiye ederim.

Git'in diğer çok tercih edilen VCS olan **SVN**'e nazaran teknik olarak en önemli farkı ademi merkeziyetçi (decentralized) olmasıdır. Yani remote ve local depo (repository) birbirinin aynısıdır. Bu da yerelde commit yapabilmenizi sağlar. SVN'deki gibi merkez deponun çevrimiçi olmasını beklemeniz gerekmez.

Git'in teknik olmayan en önemli avantajı ise Github, bitbucket, gitlab gibi merkez depolara ve dolayısıyla açık kaynak kodlu yazılım dünyasına açılan kapı olmasıdır.

## **7. Test Odaklı Yazılım Geliştirme (TDD)**

TDD söz konusu olduğunda gömülü yazılım geliştiricilerden gelen karşı argümanlar genelde şu ikisidir:

1. Donanıma kod yazıyoruz, TDD çok zahmetli olur
2. Test yazmaya ayıracağım zamanla asıl kodu yazarım, yoksa proje gecikir

Ben bunların doğru bilinen yanlışlar olduğunu düşünüyorum.

İlk argümanda kısmen de olsa bir haklılık payı var. Evet, nihayetinde yazılımı bir x86'ya değil, kaynak, mimari ve çevre elemanları bazında sınırları çok daha dar olarak belirlenmiş bir donanım için geliştiriyoruz. Dolayısıyla, TDD mikro döngülerini (test yaz - kod yaz) bu donanımda 
gerçekleştirmek karmaşık, zahmetli ve uzun sürecektir.

Ancak bu argümanı öne sürenlerin atladığı çok kritik bir nokta var!

Yazılımın çok büyük bir kısmı için hedef donanıma ihtiyacımız yok.

Yazılımın donanıma temas eden kısımlarını diğer yerlerinden soyutlayıp hedef donanımı
(target) misafir donanımla (host) değiştirebilirsiniz. Misafir donanım çok büyük ihtimalle bir PC olacaktır. Bu sayede TDD mikro-döngülerini 
kıyaslanamayacak biçimde hızlandırmış olacaksınız.

Tabi hedef donanımı da TDD'ye dahil etmek için çeşitli yöntemler yok değil. 
Dileyen [şuradan](https://jamesmunns.com/blog/hardware-ci-overview/) bir fikir sahibi olabilir.

İkinci argüman da ilk bakışta akla yatkın gözüküyor. Asıl yazacağım kod yanında en az bir o kadar da test kodu yazacağım.

Delilik değil mi? Yazar geçerim ne uğraşacağım!

Bu doğru değil.

TDD, projenin başlarında işleri yavaşlatıyor gibi gözükse de toplam geliştirme süreniz geleneksel yöntemlere kıyasla daha kısa 
oluyor. Bunun sebebi de geleneksel yaz-geç yöntemi kullanıldığında projenin ilerleyen dönemlerinde ortaya çıkacak ve maliyeti çok yüksek 
olan hataların TDD mikro-döngüleri sayesinde çok erkenden tespit edilmesi.

TDD'nin faydaları kısaca şöyle sıralanabilir:

1. Kodu yazmaya başlamadan önce tasarımın detaylı düşünülmesi için sizi zorlar
2. Hataların önceden tespit edilmesini sağlar
3. Hata ayıklamaya ayıracağınız zaman kısalır
4. Temiz ve kullanışlı bir arayüz oluşturmaya sizi zorlar
5. Toplam geliştirme süresi kısalır ve dolayısıyla maliyetler en aza iner
6. Bakımı daha kolay taşınabilir kod yazmanızı sağlar

Bir süre disiplinli bir şekilde TDD ile geliştirme yapmaya kendinizi zorladıktan sonra bu alışkanlığı edinecek ve daha sonra başka türlü çalışmak 
istemeyeceksiniz.

TDD'yi kolay ve etkin kullanabilmeniz bir framework'e ihtiyaç duyacaksınızdır. Bunu için size ceedling (unity/cmock), cppUTest veya QTest'i önerebilirim.

## **8. Sık tekrar eden işleri otomatize edin. CI/CD kullanın**

Yazılım geliştirirken tekrar eden işleriniz olacaktır.

Örneğin her derleme öncesinde bazı dosyaları değiştirmek, derleme sonunda da testleri çalıştırmak ve ürettiğiniz imajı başka bir işlemden geçirmek (örneğin kriptolamak) isteyebilirsiniz.

Bunları her derlemede el ile tekrar yapmak yerine derleme öncesinde ve sonrasında çalışacak şekilde ayarlanmış script'ler yazıp otomatik olarak yapabilirsiniz.

Bunun için Python, Perl, Ruby gibi üst seviyedeki dillerden en az birini bilmenizde fayda var.

Bu size zaman kazandıracağı gibi hata yapma ihtimalini ortadan kaldıracak ve motivasyonunuzun düşmesini engelleyecektir.

Otomatize etme işlemlerinin bir sonraki aşaması **CI (Continuous Integration)** ve **CD (Continuous Deployment)**'dır. CI/CD bütün geliştiricilerin birebir aynı ortamda otomatik olarak derleme, test, devreye alma yapmalarına olanak sağlar. Bunun pratikte bir çok faydası vardır. Bu yazıda konuyu dağıtmamak adına detaya girmeyeceğim. Dileyen [şuradan](https://www.katalon.com/resources-center/blog/benefits-continuous-integration-delivery/) inceleyebilir.


## **9. Open source bir projenin aktif katılımcısı (contributer) olun**

Bu benim şu ana kadar yapmadığım bir şey. Ancak eğer mesleğe yeni başlasaydım ve bolca vaktim olsaydı kesinlikle iyi geliştiricilerin olduğu açık kaynak kodlu bir projeye müdahil olmak için uğraşırdım.

Meslekte tecrübesi olan dünyanın en iyi yazılımcılarının kodlarını incelemek, belki onların benim yazdıklarımı incelemesi ve değerlendirmesi, onların işlerini nasıl optimize ettiğini tecrübe etmek bana çok şey kazandırırdı.

Bu bana öyle geliyor tabi. İşin içinde olanlar tecrübelerini paylaşırlarsa çok sevinirim.

## **Sonuç olarak...**

Kendi bakış açımdan mesleğe dair doğru olduğunu düşündüğüm şeyleri paylaştım.

Bu doğrular zaman içerinde değişebilir mi? Muhtemelen... Onu da zaman gösterecek.

Zaten bu yüzden bu makalenin aslını markdown formatında yazıp github'a koydum.

Sürekli güncelleyebilmek ve commit'ler vasıtasıyla gelişimi görebilmek için...

Dileyen **pull request** yapabilir ve değişim talebinde bulunabilir.

Umarım faydalı olabilmişimdir.

Kalın sağlıcakla...