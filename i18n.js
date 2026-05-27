const translations = {
  common: {
    brandHomeAria: { zh: "Purity 首页", en: "Purity Home" },
    backHomeAria: { zh: "返回 Purity 首页", en: "Back to Purity Home" },
    pageNavAria: { zh: "页面导航", en: "Page Navigation" },
    features: { zh: "功能介绍", en: "Features" },
    setup: { zh: "安装指南", en: "Setup Guide" },
    privacy: { zh: "隐私协议", en: "Privacy Policy" },
    terms: { zh: "用户协议", en: "Terms of Use" },
    contact: { zh: "联系我们", en: "Contact" },
    home: { zh: "首页", en: "Home" },
    copyright: { zh: "© 2026 Purity", en: "© 2026 Purity" }
  },
  index: {
    title: { zh: "Purity - 车辆数据助手", en: "Purity - Vehicle Data Assistant" },
    description: {
      zh: "Purity 是一款车辆数据查看工具，支持车辆状态、行程记录、充电记录、电费估算与车辆设置。",
      en: "Purity is a vehicle data companion for status, drive records, charging history, electricity cost estimates, and vehicle settings."
    },
    heroEyebrow: { zh: "车辆状态 · 行程记录 · 充电成本", en: "Vehicle Status · Drive Records · Charging Costs" },
    heroCopy: {
      zh: "一个简洁清晰的车辆数据助手，帮助你查看车辆状态、回顾驾驶记录、追踪充电效率，并按本地电价估算充电费用。",
      en: "A clean vehicle data assistant for checking vehicle status, reviewing drives, tracking charging efficiency, and estimating charging costs from your local electricity rates."
    },
    learnFeatures: { zh: "了解功能", en: "Explore Features" },
    sendEmail: { zh: "发送邮件", en: "Send Email" },
    previewAria: { zh: "Purity 应用界面预览", en: "Purity app interface preview" },
    vehicleStatus: { zh: "车辆状态", en: "Vehicle Status" },
    range: { zh: "续航", en: "Range" },
    tirePressure: { zh: "胎压", en: "Tire Pressure" },
    normal: { zh: "正常", en: "Normal" },
    chargeRecords: { zh: "充电记录", en: "Charging Records" },
    chargedEnergy: { zh: "已充电量", en: "Energy Added" },
    costEstimate: { zh: "费用估算", en: "Cost Estimate" },
    featuresEyebrow: { zh: "Features", en: "Features" },
    coreFeatures: { zh: "核心功能", en: "Core Features" },
    featureIntro: {
      zh: "围绕日常用车、能耗和充电成本设计，信息清晰，操作直接。",
      en: "Designed around daily vehicle use, energy consumption, and charging costs, with clear information and direct interactions."
    },
    featureStatusTitle: { zh: "车辆状态", en: "Vehicle Status" },
    featureStatusText: {
      zh: "查看电量、续航、充电状态、胎压、温度、门窗状态和车辆位置信息。",
      en: "View battery level, range, charging status, tire pressure, temperature, doors, windows, and vehicle location."
    },
    featureDriveTitle: { zh: "行程记录", en: "Drive Records" },
    featureDriveText: {
      zh: "回顾每次驾驶的时间、里程、能耗、电量变化和轨迹地图。",
      en: "Review each drive's time, distance, efficiency, battery change, and route map."
    },
    featureChargeTitle: { zh: "充电记录", en: "Charging Records" },
    featureChargeText: {
      zh: "查看充电时长、充入电量、充电效率、费用和实际单价。",
      en: "Check charging duration, added energy, efficiency, cost, and effective unit price."
    },
    featureRateTitle: { zh: "电费设置", en: "Electricity Rates" },
    featureRateText: {
      zh: "支持普通电价和峰谷电价设置，在费用缺失时按本地规则估算。",
      en: "Configure flat or peak/off-peak rates and estimate costs locally when backend cost data is missing."
    },
    featureSetupTitle: { zh: "安装指南", en: "Setup Guide" },
    featureSetupText: {
      zh: "按步骤准备 TeslaMate API、配置访问地址，并在 App 内完成服务器连接。",
      en: "Prepare TeslaMate API, configure access, and connect the server inside the app step by step."
    },
    viewSetup: { zh: "查看安装指南", en: "View Setup Guide" },
    clarityEyebrow: { zh: "Designed for Clarity", en: "Designed for Clarity" },
    clarityTitle: { zh: "为清晰查看车辆数据而设计", en: "Designed for Clear Vehicle Data" },
    clarityText: {
      zh: "Purity 保持简洁的信息结构，减少干扰。状态、记录、充电和设置各自独立，适合快速查看，也适合长期追踪车辆使用表现。",
      en: "Purity keeps vehicle information structured and distraction-free. Status, drives, charging, and settings stay separate for quick checks and long-term tracking."
    },
    contactEyebrow: { zh: "Contact", en: "Contact" },
    contactTitle: { zh: "联系我们", en: "Contact Us" },
    contactText: {
      zh: "如有问题、建议或支持需求，可以直接通过邮件联系我们。",
      en: "For questions, suggestions, or support, contact us directly by email."
    }
  },
  setup: {
    title: { zh: "Purity 安装指南", en: "Purity Setup Guide" },
    description: {
      zh: "Purity 安装指南，说明 TeslaMate API 准备、远程访问、安全建议和 App 服务器连接配置。",
      en: "Purity setup guide for TeslaMate API preparation, remote access, security recommendations, and app server connection."
    },
    eyebrow: { zh: "Setup Guide", en: "Setup Guide" },
    heading: { zh: "安装指南", en: "Setup Guide" },
    intro: {
      zh: "Purity 通过你自己的 TeslaMate API 获取车辆状态、行程记录、充电记录和电池健康数据。按下面步骤完成 API 服务准备、外网访问配置和 App 内连接设置。",
      en: "Purity reads vehicle status, drive records, charging records, and battery health from your own TeslaMate API. Follow the steps below to prepare the API service, configure remote access, and connect it in the app."
    },
    stepsAria: { zh: "安装步骤", en: "Setup Steps" },
    step1Title: { zh: "准备环境", en: "Prepare Environment" },
    step1Text: {
      zh: "你需要先拥有可正常运行的 TeslaMate 服务，并能访问 TeslaMate 使用的数据库。建议将 API 服务部署在同一台服务器或同一内网环境中，减少数据库暴露面。",
      en: "You need a working TeslaMate service and access to the database used by TeslaMate. Deploy the API service on the same server or private network to reduce database exposure."
    },
    step1Item1: { zh: "已部署 TeslaMate", en: "TeslaMate is already deployed" },
    step1Item2: { zh: "服务器可运行 Docker 或常规后端服务", en: "The server can run Docker or a regular backend service" },
    step1Item3: { zh: "已准备数据库连接信息", en: "Database connection information is ready" },
    step2Title: { zh: "部署 TeslaMate API", en: "Deploy TeslaMate API" },
    step2Text1: {
      zh: "App 需要通过 API 接口读取数据。请将 TeslaMate API 服务部署在运行 TeslaMate 的同一台服务器上。详细说明请查看",
      en: "The app reads data through API endpoints. Deploy TeslaMate API on the same server that runs TeslaMate. For detailed instructions, visit the"
    },
    step2Link: { zh: "TeslaMate API GitHub 仓库", en: "TeslaMate API GitHub repository" },
    step2End: { zh: "。", en: "." },
    step2Text2: {
      zh: "将以下配置添加到你的 docker-compose.yml 文件中，并务必根据实际情况修改数据库密码、时区等环境变量：",
      en: "Add the following configuration to your docker-compose.yml file, and adjust the database password, time zone, and other environment variables for your setup:"
    },
    step3Title: { zh: "配置安全访问", en: "Configure Secure Access" },
    step3Text: {
      zh: "如果需要在外网使用 Purity，请通过 HTTPS、反向代理或安全隧道开放 API。不建议直接公开数据库端口，也不建议使用无认证的公网接口。",
      en: "If you need to use Purity outside your local network, expose the API through HTTPS, a reverse proxy, or a secure tunnel. Do not expose database ports directly or use public endpoints without authentication."
    },
    step3Item1: { zh: "优先使用 HTTPS 域名", en: "Prefer an HTTPS domain" },
    step3Item2: { zh: "为 API 设置访问令牌或基础认证", en: "Protect the API with an access token or basic authentication" },
    step3Item3: { zh: "限制服务器防火墙访问范围", en: "Restrict access through server firewall rules" },
    step4Title: { zh: "在 App 内连接", en: "Connect in the App" },
    step4Text: {
      zh: "打开 Purity，进入设置里的服务器设置页面，填写 API 地址和认证信息。保存后返回状态页，下拉刷新或重新进入 Tab，即可查看车辆数据。",
      en: "Open Purity, go to Server Settings, and enter the API address and authentication details. After saving, return to Status and pull to refresh or re-enter the tab to view vehicle data."
    },
    step4Item1: { zh: "打开 Purity 设置", en: "Open Purity Settings" },
    step4Item2: { zh: "进入服务器设置", en: "Open Server Settings" },
    step4Item3: { zh: "填写 API Base URL", en: "Enter the API Base URL" },
    step4Item4: { zh: "保存并测试连接", en: "Save and test the connection" },
    checklistEyebrow: { zh: "Checklist", en: "Checklist" },
    checklistTitle: { zh: "连接前检查", en: "Before Connecting" },
    check1: {
      zh: "<strong>接口可访问：</strong>浏览器或调试工具可以打开 API 地址并看到 JSON 返回。",
      en: "<strong>API is reachable:</strong> A browser or debug tool can open the API URL and receive JSON."
    },
    check2: {
      zh: "<strong>时间和单位正确：</strong>确认服务器时区、长度单位和温度单位符合你的使用习惯。",
      en: "<strong>Time and units are correct:</strong> Confirm the server time zone, length unit, and temperature unit match your preference."
    },
    helpEyebrow: { zh: "Need Help", en: "Need Help" },
    helpTitle: { zh: "需要协助？", en: "Need Help?" },
    helpText: {
      zh: "如果你在部署或连接过程中遇到问题，可以发送邮件联系我们。",
      en: "If you run into issues during deployment or connection, send us an email."
    }
  },
  privacy: {
    title: { zh: "隐私协议 - Purity", en: "Privacy Policy - Purity" },
    description: { zh: "Purity 隐私协议", en: "Purity Privacy Policy" },
    eyebrow: { zh: "Privacy Policy", en: "Privacy Policy" },
    heading: { zh: "隐私协议", en: "Privacy Policy" },
    updated: { zh: "更新日期：2026 年 5 月 23 日", en: "Updated: May 23, 2026" },
    section1Title: { zh: "1. 信息收集", en: "1. Information Collection" },
    section1Text: {
      zh: "Purity 尊重并保护用户隐私。应用用于展示车辆状态、行程记录、充电记录和用户配置的车辆相关设置。应用不会主动收集与功能无关的个人信息。",
      en: "Purity respects and protects user privacy. The app is used to display vehicle status, drive records, charging records, and user-configured vehicle settings. It does not actively collect personal information unrelated to its core features."
    },
    section2Title: { zh: "2. 本地配置信息", en: "2. Local Configuration" },
    section2Text: {
      zh: "用户在应用中填写的服务端地址、认证信息、电费单价和峰谷电设置，主要用于本地配置和应用功能展示。请妥善保管你的服务器地址、Token 或其他访问凭证。",
      en: "Server addresses, authentication information, electricity rates, and peak/off-peak settings entered in the app are mainly used for local configuration and app features. Keep your server address, token, and other credentials secure."
    },
    section3Title: { zh: "3. 车辆数据", en: "3. Vehicle Data" },
    section3Text: {
      zh: "如应用通过用户配置的服务端请求车辆数据，相关数据的存储、处理和传输取决于用户所连接的服务端。建议用户仅连接可信任的服务端环境。",
      en: "When the app requests vehicle data through a user-configured server, data storage, processing, and transmission depend on that server. Users should only connect to trusted server environments."
    },
    section4Title: { zh: "4. 信息使用", en: "4. Use of Information" },
    section4Text: {
      zh: "Purity 使用相关数据用于展示车辆状态、地图位置、驾驶记录、充电记录、费用估算和用户设置。应用不会将这些信息用于与核心功能无关的用途。",
      en: "Purity uses relevant data to display vehicle status, map location, drive records, charging records, cost estimates, and user settings. The app does not use this information for purposes unrelated to its core features."
    },
    section5Title: { zh: "5. 信息安全", en: "5. Information Security" },
    section5Text: {
      zh: "我们建议用户保护好设备访问权限和服务端认证信息。由于网络环境、用户配置或第三方服务导致的数据泄露、丢失或异常，用户应根据自身服务端环境进行安全管理。",
      en: "We recommend protecting device access and server credentials. Users are responsible for managing security in their own server environment, including risks caused by networks, configuration, or third-party services."
    },
    section6Title: { zh: "6. 联系我们", en: "6. Contact Us" },
    section6Text: { zh: "如对隐私协议有疑问，请通过邮件联系我们：", en: "If you have questions about this Privacy Policy, contact us by email:" }
  },
  terms: {
    title: { zh: "用户协议 - Purity", en: "Terms of Use - Purity" },
    description: { zh: "Purity 用户协议", en: "Purity Terms of Use" },
    eyebrow: { zh: "Terms of Use", en: "Terms of Use" },
    heading: { zh: "用户协议", en: "Terms of Use" },
    updated: { zh: "更新日期：2026 年 5 月 23 日", en: "Updated: May 23, 2026" },
    section1Title: { zh: "1. 协议接受", en: "1. Acceptance" },
    section1Text: {
      zh: "使用 Purity 即表示你理解并同意本用户协议。如你不同意本协议内容，请停止使用本应用。",
      en: "By using Purity, you understand and agree to these Terms of Use. If you do not agree, please stop using the app."
    },
    section2Title: { zh: "2. 功能说明", en: "2. Features" },
    section2Text: {
      zh: "Purity 用于展示车辆状态、行程记录、充电记录、地图位置、费用估算和用户配置等信息。应用中的车辆状态、行程、充电费用估算等信息仅用于日常查看和参考，实际数据以车辆、充电服务、账单或相关服务端返回结果为准。",
      en: "Purity displays vehicle status, drive records, charging records, map location, cost estimates, and user configuration. Vehicle status, drive information, and charging cost estimates are for daily reference only. Actual data should be verified against the vehicle, charging service, bill, or backend response."
    },
    section3Title: { zh: "3. 用户责任", en: "3. User Responsibilities" },
    section3Text: {
      zh: "用户应确保所填写的服务器信息、认证信息和车辆相关配置真实、合法且拥有相应使用权限。用户应自行妥善保管服务器地址、Token 或其他访问凭证。",
      en: "Users must ensure that server information, authentication details, and vehicle-related configuration are accurate, lawful, and used with proper authorization. Users are responsible for protecting server addresses, tokens, and other credentials."
    },
    section4Title: { zh: "4. 数据准确性", en: "4. Data Accuracy" },
    section4Text: {
      zh: "因错误配置、网络异常、服务端数据异常、车辆状态同步延迟或第三方服务变化导致的信息不准确，应用不承担由此产生的直接或间接损失。",
      en: "The app is not responsible for direct or indirect losses caused by inaccurate information due to incorrect configuration, network issues, backend data errors, vehicle sync delays, or third-party service changes."
    },
    section5Title: { zh: "5. 合理使用", en: "5. Acceptable Use" },
    section5Text: {
      zh: "用户不得将 Purity 用于任何违法、侵权、未经授权访问车辆数据或破坏服务端安全的行为。因用户不当使用造成的后果由用户自行承担。",
      en: "Users must not use Purity for illegal activity, infringement, unauthorized access to vehicle data, or actions that compromise server security. Users are responsible for consequences caused by improper use."
    },
    section6Title: { zh: "6. 协议更新", en: "6. Updates" },
    section6Text: {
      zh: "我们可能根据产品功能和合规要求更新本页面内容。继续使用应用视为接受更新后的条款。",
      en: "We may update this page based on product features and compliance requirements. Continued use of the app means you accept the updated terms."
    },
    section7Title: { zh: "7. 联系我们", en: "7. Contact Us" },
    section7Text: { zh: "如对用户协议有疑问，请通过邮件联系我们：", en: "If you have questions about these Terms of Use, contact us by email:" }
  }
};

function currentLanguage() {
  const saved = localStorage.getItem("purity-language");
  if (saved === "zh" || saved === "en") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function textFor(key, language, page) {
  const pageText = translations[page] && translations[page][key];
  const commonText = translations.common[key];
  return (pageText || commonText || {})[language];
}

function applyLanguage(language) {
  const page = document.body.dataset.page || "index";
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  localStorage.setItem("purity-language", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = textFor(element.dataset.i18n, language, page);
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = textFor(element.dataset.i18nHtml, language, page);
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = textFor(element.dataset.i18nAria, language, page);
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  const title = textFor("title", language, page);
  const description = textFor("description", language, page);
  if (title) document.title = title;
  if (description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLanguage());
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });
});
