# 9 Carrier Tips for Embedded Software Developers

I would like to make an introduction to this article by sharing the following great chart by STFA Group co-founder Feyzi Akkaya who is a reputable Turkish engineer.

<div class="q-mb-lg text-center">
  <img src="../statics/tecrube-igrisi-en.jpg" />
</div>

There is a long period of inexperience after graduation, as is shown in this graph.

It's my 12th year in my career, and I think that I am almost in harmony with this graph.

Almost 10 of these 12 years have passed by in ignorance of knowing that I am inexperienced. I've done a lot wrong, and now I think I'm on the right track, albeit a bit. Of course, I have still a long way to go.

The reason I'm writing this article is a little selfish.

I thought there should be a reason and a reminder for me not to repeat the mistakes I have made over the years.

Therefore, I decided to list the correct habits and publish as an article to check it periodically and not to repeat the same mistakes.

Although I aimed for Embedded Software Developers, I think it can appeal to other software developers as well.

Let's start.

## 1. Do Not Work Under Isolation

<div class="q-mb-lg text-center">
  <img src="../statics/isolation.jpg" />
</div>

Isolation is your greatest enemy!

What do I mean by isolation?

For example, in a project, you develop software on a micro-controller. If you are developing the software without discussing with anyone, you prepare the architecture yourself, you choose the tools you will use yourself, determine the methods yourself and the code you write is not seen by a living soul but you, it means you are under isolation.

You should run away from this situation as soon as possible.

The gains you will be deprived of while working under isolation are as follows:

Discussing and analyzing the issue with developers of different perspectives while solving a problem increases efficiency. It is also more positive for your career because team members benefit from each other's technical knowledge and fill the gaps in their careers faster.

You are more motivated when dealing with a difficult problem.

Checking your code by other developers makes it easier to detect errors early.

Developing together forces you to use methods such as CI / CD, TDD, effective use of version control systems and good documentation, which are now becoming accepted in the embedded software community.

The continuation and duration of the project will not be endangered as there will be at least one other person who knows the work closely when one of the team members leaves the job.

The only benefit of working under isolation is that it allows you to try out the new technology you want without anyone interfering with you. Other than that, the time spent on you is total damage, especially if you don't have enough self-discipline.

## 2. Find best practices

<div class="q-mb-lg text-center">
  <img src="../statics/best-practice.jpg" />
</div>

Although it is relatively difficult to reach best practices in the embedded software, it would not be wrong to say that it is much easier than before.

Before deciding on a method, you should always ask these questions to yourself; "how can I do this best? "," Someone must have gone through this path before" and do short research or consult a more experienced colleague.

The internet is the best resource for this. A piece of open source code that does the work will likely be on Github.

You can consult StackOverflow.

You can even get mentoring from the best technical people in the world for a small fee (codementor.io).

## 3. Postpone coding

<div class="q-mb-lg text-center">
  <img src="../statics/stop-coding.jpg" />
</div>

I know …

You itch for starting to type your delicious spaghetti codes.

Do not …

Do not embark upon this task until you have fully defined the requirements, fully created the architecture and design and agreed on common ground with the people you work with.

If you start writing code immediately, the problems you will encounter make you lose a lot of time and you will probably be disappointed in the end.

Postpone coding, even when coding.

For example, would you name a variable? Remember that this name should be read and understood by others and your future version. Take more time to think, find out how other developers in the same situation make naming, so name it.

## 4. Are you a software or a hardware developer? Decide!

<div class="q-mb-lg text-center">
  <img src="../statics/yol-ayrimi.jpg" />
</div>

This situation is unique to our profession…

After a long time with the preparation of the schematics, the design of the PCB board and the making of the prototypes, you may start to prepare the software too.

If your resources are limited and only one engineer can work on the project, I understand it.

However, if this is a conscious choice rather than the above, I'm sorry, but I think this is very wrong.

Although the embedded system engineers are more familiar with the hardware than conventional software developers, the work of a hardware designer and an embedded software developer is quite different.

Working equally in both fields will delay, or even prevent, your specialization in both fields. Specializing rapidly can be vital in increasing competition conditions.

Therefore, if you have the opportunity, and if you want to specialize in the fields, 
you should decide!

Are you gonna be a hardware or a software guy?

## 5. Do not touch the working system

<div class="q-mb-lg text-center">
  <img src="../statics/code.jpg" />
</div>

I don't know if you've ever seen a software developer who didn't criticize his predecessor, but I've never been with someone like that before.
I'm no different.

The predecessor's method of solving a problem, the methods, notations, code style, whether it uses space or tab as indentation, etc. may be very different from yours. That doesn't mean he's wrong.

Let's say the code contains obvious false practices. For example, the routine in an interrupt is too long or too many global variables are used.
So what do we do?

Are we going to change the code now?

Of course no.

Refactoring is much more serious than you might think.

It should be planned, tests designed and thought on carefully without changing a single line. Otherwise, it is likely to produce undesirable consequences.

## 6. Learn and use a version control system (VCS)

<div class="q-mb-lg text-center">
  <img src="../statics/git.png" />
</div>

It's been 2020!

If you are still not using a VCS, I recommend you to learn one and practice it as soon as possible.

In this article, I will not mention why it is necessary to use VCS. You may wish to read and learn from here.
Recently, the most preferred VCS is Git. I strongly recommend you use it.

Technically the most important difference of Git compared to SVN, the other preferred VCS, is that it is decentralized. That is, the remote and local repository are the same. This allows you to commit locally. Unlike from SVN, you don't have to wait for the central repository to come online.

The most important non-technical advantage of Git is that it is the gateway to central repositories such as Github, Bitbucket, Gitlab, and therefore to the world of open-source software.

## 7. Test-Driven Software Development (TDD)

<div class="q-mb-lg text-center">
  <img src="../statics/tdd.jpg" />
</div>

When it comes to TDD, the counter-arguments from embedded software developers can be divided into two categories:
We write code to hardware, TDD is very laborious

I can write the actual code over time I will devote to writing the test, otherwise, the project will be delayed.

I think these are mistakes.

In the first argument, there is a fair margin. Yes, after all, we do not develop the software for an x86, but for hardware that is much narrower in terms of resources, architecture, and peripherals. Consequently, performing TDD microcycles (write the test - write code) on this hardware will be complex, laborious and long.

But there is a critical point that those who make these arguments omit!

We don't need the target hardware for the majority of the software.

You can abstract the parts of the software that come into contact with the hardware from the other parts and replace the target hardware with the guest hardware.

Guest hardware will most likely be a PC. In this way, you will accelerate the TDD micro-cycles incomparably.

Of course, there are several ways to incorporate the target hardware into the TDD. You can check it out here to get an idea.
The second argument seems plausible at first glance: "Spending at least the same amount of time to write test code besides the actual code is ridiculous."

This is not true.

Although TDD seems to slow things down at the beginning of the project, your total development time is shorter than traditional methods. The reason for this is that the problems showing up in the later stages of the project that will cost you high can be detected very early by the TDD micro-cycles.

The benefits of TDD can be summarized as follows:

- Forces you to consider the design in detail before you start writing the code
- Provides error detection in advance
- The time you devote to debugging becomes shorter
- Forces you to create a clean and convenient interface
- Total development time is shortened and thus costs are minimized
- Allows you to write portable code that is easier to maintain

After you force yourself to develop with TDD in a disciplined way for a while, you will acquire this habit and then you will not want to work otherwise.

## 8. Automate frequently repeated jobs. Use CI / CD

<div class="q-mb-lg text-center">
  <img src="../statics/automatize.jpg" />
</div>

You will probably have repetitive works while developing software.

For example, you may want to modify some files before each compilation, run tests at the end of the compilation, and process the final image (for example, encrypting it).

Instead of manually repeating each step, you can write scripts that are set to run before and after compilation, and do so automatically.

You are better to know at least one of the high-level languages ​​such as Python, Perl, and Ruby.

This will save you time, eliminate the possibility of mistakes and keep your motivation high.

The next stage of automation is CI (Continuous Integration) and CD (Continuous Deployment). CI / CD allows all developers to automatically compile, test and commission in the same environment. This has many benefits in practice. In this article, I'm not going to go into detail. You can review it from here.

## 9. Be an active contributor in an open-source project

<div class="q-mb-lg text-center">
  <img src="../statics/open-source.png" />
</div>

This is something I haven't done yet.

However, if I had just started the profession and had plenty of time, I would certainly have been involved in an open-source project with good developers.

Examining the codes of the best software developers in the world and experiencing how they optimize their work would give me a lot.

## Bottom Line
I shared what I thought was right about the profession from my point of view.

Can these truths change over time? Probably… time will show…

That's why I put the original of this article in markdown format and put it in my Github repo.

To be able to constantly update and see the progress through commits…

You can open issues and request changes.

Thanks.