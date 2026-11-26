const T = {
en: {
 n_home:"Home", n_about:"About", n_skills:"Skills", n_edu:"Education & Training", n_proj:"Projects", n_cert:"Certifications", n_contact:"Contact",
 hi:"Hello, I'm", role:"Computer Science & AI Student | Aspiring Machine Learning Engineer",
 intro:"Third-year student at Fayoum University, building a foundation in Python, data science and machine learning.",
 b_proj:"View my Projects", b_cv:"Download CV",
 a1:"I'm a Computer Science and Artificial Intelligence student at Fayoum University with a strong interest in Machine Learning and AI. I'm passionate about programming, problem-solving, and using technology to solve real-world problems.",
 a2:"I've built a foundation in programming, algorithms and data structures, and I work with Python and tools such as NumPy, Pandas, Scikit-learn and XGBoost. I'm especially interested in building intelligent systems and turning data into insights and predictions.",
 a3:"My goal is to grow as a Machine Learning Engineer by learning continuously and building practical projects. I'm always open to connecting, sharing knowledge and exploring collaboration.",
 f_uni:"Faculty of Computers & Artificial Intelligence", f_locT:"Location", f_loc:"Fayoum, Egypt", f_langT:"Languages", f_lang:"Arabic (Native), English (B1)",
 sk:["Programming Languages","Libraries & Frameworks","Web Technologies","CS Fundamentals","Development Tools"],
 fund:["Object-Oriented Programming (OOP)","Data Structures","Algorithms","Problem Solving"],
 e1t:"Faculty of Computers & Artificial Intelligence", e1d:"Bachelor's degree (in progress), 4-year program. Expected graduation: 2028.",
 e2w:"Sep 21 – Oct 29, 2026", e2t:"Machine Learning Training Program", e2o:"National Telecommunication Institute (NTI)",
 e2d:"Completed practical machine learning training covering Python, data science tools and machine learning concepts, including a collaborative Customer Churn Prediction project.",
 e2s:"Certificate: pending issuance",
 p_team:"Team Project", p_live:"Live Demo",
 p_d:"A machine learning system that predicts customer churn and helps businesses identify customers who are likely to leave. It uses machine learning models to analyze customer data and serves predictions through an interactive Streamlit application.",
 c_t:"Data Analysis Workshop", c_d:"September 27, 2026", c_h:"Click the certificate to view it larger.",
 rights:"All rights reserved.",

},
ar: {
 n_home:"الرئيسية", n_about:"نبذة عني", n_skills:"المهارات", n_edu:"التعليم والتدريب", n_proj:"المشاريع", n_cert:"الشهادات", n_contact:"تواصل معي",
 hi:"مرحبًا، أنا", role:"طالب علوم حاسب وذكاء اصطناعي | طموح لأصبح مهندس تعلم آلة",
 intro:"طالب في السنة الثالثة بجامعة الفيوم، أبني أساسًا قويًا في بايثون وعلوم البيانات وتعلم الآلة.",
 b_proj:"شاهد مشاريعي", b_cv:"تحميل السيرة الذاتية",
 a1:"أنا طالب علوم الحاسب والذكاء الاصطناعي بجامعة الفيوم، ولدي اهتمام كبير بتعلم الآلة والذكاء الاصطناعي. أحب البرمجة وحل المشكلات واستخدام التقنية في حل مشكلات حقيقية.",
 a2:"كوّنت أساسًا في البرمجة والخوارزميات وهياكل البيانات، وأعمل بلغة بايثون وأدوات مثل NumPy وPandas وScikit-learn وXGBoost. يهمني بناء أنظمة ذكية وتحويل البيانات إلى رؤى وتوقعات.",
 a3:"هدفي أن أصبح مهندس تعلم آلة عبر التعلم المستمر وبناء مشاريع عملية. يسعدني التواصل وتبادل المعرفة واستكشاف فرص التعاون.",
 f_uni:"كلية الحاسبات والذكاء الاصطناعي", f_locT:"الموقع", f_loc:"الفيوم، مصر", f_langT:"اللغات", f_lang:"العربية (اللغة الأم)، الإنجليزية (B1)",
 sk:["لغات البرمجة","المكتبات وأطر العمل","تقنيات الويب","أساسيات علوم الحاسب","أدوات التطوير"],
 fund:["البرمجة الكائنية (OOP)","هياكل البيانات","الخوارزميات","حل المشكلات"],
 e1t:"كلية الحاسبات والذكاء الاصطناعي", e1d:"درجة البكالوريوس (قيد الدراسة)، مدة البرنامج 4 سنوات. التخرج المتوقع: 2028.",
 e2w:"21 سبتمبر – 29 أكتوبر 2026", e2t:"برنامج تدريب تعلم الآلة", e2o:"المعهد القومي للاتصالات (NTI)",
 e2d:"أتممت تدريبًا عمليًا في تعلم الآلة شمل بايثون وأدوات علوم البيانات ومفاهيم تعلم الآلة، بما في ذلك مشروع جماعي للتنبؤ بانسحاب العملاء.",
 e2s:"الشهادة: قيد الإصدار",
 p_team:"مشروع جماعي", p_live:"عرض مباشر",
 p_d:"نظام تعلم آلة يتنبأ بانسحاب العملاء ويساعد الشركات على تحديد العملاء المحتمل مغادرتهم. يستخدم نماذج تعلم آلة لتحليل بيانات العملاء ويعرض التنبؤات عبر تطبيق Streamlit تفاعلي.",
 c_t:"ورشة تحليل البيانات", c_d:"27 سبتمبر 2026", c_h:"اضغط على الشهادة لعرضها بحجم أكبر.",
 rights:"جميع الحقوق محفوظة.",

}};

const SK = [
 [["Python","devicon-python-plain colored"],["C++","devicon-cplusplus-plain colored"],["SQL","fa-solid fa-database"]],
 [["NumPy","devicon-numpy-plain colored"],["Pandas","devicon-pandas-plain"],["Matplotlib","devicon-matplotlib-plain"],["Seaborn","fa-solid fa-chart-simple"],["Scikit-learn","devicon-scikitlearn-plain colored"],["XGBoost","fa-solid fa-tree"],["Streamlit","fa-solid fa-bolt"]],
 [["HTML","devicon-html5-plain colored"],["CSS","devicon-css3-plain colored"]],
 [],
 [["Git","devicon-git-plain colored"],["GitHub","devicon-github-original"],["VS Code","devicon-vscode-plain colored"],["Visual Studio","devicon-visualstudio-plain colored"],["PyCharm","devicon-pycharm-plain colored"],["Jupyter Notebook","devicon-jupyter-plain colored"],["Google Colab","fa-brands fa-google"]]
];

const $ = (s, r = document) => r.querySelector(s);
let lang = "en";

function renderSkills() {
  const t = T[lang];
  $("#skillGrid").innerHTML = SK.map((list, i) => {
    const items = i === 3 ? t.fund.map(n => [n, "fa-solid fa-check"]) : list;
    return `<section class="rv"><h3>${t.sk[i]}</h3><ul>${items.map(([n, c]) => `<li><i class="${c}" aria-hidden="true"></i>${n}</li>`).join("")}</ul></section>`;
  }).join("");
  observe();
}

function setLang(l) {
  lang = l;
  const t = T[l], d = document.documentElement;
  d.lang = l; d.dir = l === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(e => { if (t[e.dataset.i18n]) e.textContent = t[e.dataset.i18n]; });
  $("#lang").textContent = l === "ar" ? "EN" : "عربي";
  $("#lang").setAttribute("aria-label", l === "ar" ? "Switch to English" : "التبديل إلى العربية");
  renderSkills();
  try { localStorage.setItem("lang", l); } catch (e) {}
}

function setTheme(m) {
  document.documentElement.dataset.theme = m;
  try { localStorage.setItem("theme", m); } catch (e) {}
}

const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const el = e.target; el.classList.add("in"); io.unobserve(el); setTimeout(() => el.classList.remove("rv", "in"), 800); } }), { threshold: .12 }) : null;
function observe() { document.querySelectorAll(".rv:not(.in)").forEach(e => io ? io.observe(e) : e.classList.add("in")); }
document.querySelectorAll(".card,.proj,.tl li,.links,form").forEach(e => e.classList.add("rv"));

$("#lang").onclick = () => setLang(lang === "en" ? "ar" : "en");
$("#theme").onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
$("#burger").onclick = e => { const o = $("#menu").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };
$("#menu").onclick = e => { if (e.target.tagName === "A") $("#menu").classList.remove("open"); };

const lb = $("#lb");
document.querySelectorAll("[data-zoom]").forEach(b => b.onclick = () => { $("img", lb).src = b.dataset.zoom; $("img", lb).alt = $("img", b).alt; lb.showModal(); });
$("#lbx").onclick = () => lb.close();
lb.onclick = e => { if (e.target === lb) lb.close(); };

const links = [...document.querySelectorAll("#menu a")];
const spy = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" }) : null;
if (spy) document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

$("#yr").textContent = new Date().getFullYear();
let saved = {};
try { saved = { lang: localStorage.getItem("lang"), theme: localStorage.getItem("theme") }; } catch (e) {}
if (saved.theme) setTheme(saved.theme);
setLang(saved.lang === "ar" ? "ar" : "en");
