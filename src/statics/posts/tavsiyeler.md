

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

Olmadı stackoverflow.com ne güne duruyor.

Hatta cüzi bir ücret vererek dünyada bu işi en iyi yapan kişilerden mentorluk bile alabilirsiniz (codementor.io)

## **3. Kod yazmayı erteleyin**

<div class="q-mb-lg text-center">
  <img src="../statics/stop-coding.jpg" />
</div>

Biliyorum...

Bütün hücrelerinizle bir an önce klavyenin başına geçip o muazzam lezzetli spagetti kodlarınızı tuşlamak istiyorsunuz.

Yapmayın...

Gereksinimleri tam olarak belirlemeden, mimariyi ve tasarımı tam olarak oluşturmadan, birlikte çalışacağınız kişilerle ortak bir zeminde anlaşmadan bu işe girişmeyin.

"Kervan yolda düzülür" diyerek önce kod yazmaya başlasanız, daha sonra karşılaşacağınız sorunlar size çok zaman kaybettireceği gibi tadınızı tuzunuzu da kaçıracaktır.

Hatta kod yazarken bile kod yazmayı erteleyin. Örneğin bir değişkene isim mi vereceksiniz. Bu vereceğiniz ismi başka kişilerin veya sizin gelecekteki versiyonunuzun da okuyup anlaması gerektiğini unutmayın. Düşünmeye daha fazla zaman ayırın, aynı durumdaki diğer geliştiricilerin nasıl isimlendirme yaptığını araştırın, öyle verin ismi.

## **4. Yazılımcı mısınız yoksa donanımcı mı? Kara Verin!**

Bu durum bizim mesleğe has bir durum...

Şematiklerin hazırlanması, PCB kartının tasarımı, prototiplerin çalışır hale getirilmesiyle geçen koskoca bir zamandan sonra hoop şimdi de yazılımı hazırlayayım.

Eğer imkan ve kaynaklarınız kısıtlı ve proje üzerinde ancak bir mühendis çalışabiliyorsa bunu anlarım.

Ancak bu surum yukarıdaki durumdan azade bilinçli bir tercihse kusura bakmayın ama bunun çok yanlış olduğunu düşünüyorum.

Her ne kadar gömülü sistem mühendisi klasik bir yazılımcıya göre donanımla daha içli dışlı olsa da, bir donanım tasarımcısı ile gömülü yazılımcının yaptığı işler oldukça farklıdır.

Her iki alanda eşit şekilde çalışmak iki alanda da uzmanlaşmanızı geciktirecek, hatta belki de engelleyecektir. Hızlı uzmanlaşmak artan rekabet koşularında hayatidir. Her iki alan da derya denizdir ve öğrenilecek çok şey vardır.

Bundan dolayı eğer imkanınız varsa, dahi falan değilseniz ve uzmanlaşmak istiyorsanız bir kara verin. Donanımcı mı olacaksınız, yoksa yazılımcı mı?

Mesleğe çok uzak olmayan farklı kaynaklardan beslenin. Sorunların çözümlerine farklı açılardan yaklaşmanızı ve yenilikçi yöntemler geliştirmenizi sağlar.

## **5. Çalışan koda dokunma**

Kendinden önceki yazılımcıyı eleştirmeyen yazılımcı hiç gördünüz mü bilmiyorum ama ben daha önce hiç böyle biriyle müşerref olmadım.

Zatımı da bundan gayrı tutmuyorum.

Selef yazılımcının bir problemi çözüş biçimi, kullandığı metotlar, notasyonlar, kod stili, indentation olarak boşluk mu tab mı kullandığı vs. sizinkinden çok farklı olabilir. Bu onun yanlış olduğu anlamına gelmez.

Diyelim ki kod apaçık yanlış pratikler içeriyor. Örneğin, kesme (interrupt) içerisindeki rutin çok uzun veya gereğinden fazla global değişkenler kullanılmış. Bu durumda ne yapıyoruz?

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


TDD’yi kullanın. “Gömülü sistemde donanıma bağımlısın TDD çok zor olur” demeyin çünkü öyle değil. Geliştirdiğiniz kodun büyük bir bölümünü TDD kullanarak geliştirebilirsiniz. Projeyi birbirine az bağımlı (loosly coupled) birimlere (units) ayırmak birlikte çalışırken de büyük kolaylık sağlar. Coverage hesaplayın.
Versiyon kontrol sistemlerinden herhangi birini değil git’i öğrenin. Herhangi bir arayüz mümkün olduğu kadar kullanmayın. Komut satırından işlemlerinizi yapın.
Open source bir projenin aktif katılımcısı (contributer) olun. 
Test ve devreye alma (deploy) işlerinizi otomatize edin. CI kullanın. El ile yaptığınız işlerden sizi kurtarır ve değerli zamanınızı size iade eder. Birlikte çalışırken bütün geliştiricilerin aynı ortamda test yapabilmesini sağlar.
