import { Header } from "@/components/Header";
import Head from "next/head";

const businessItems = [
  {
    area: "札幌",
    title: "航空管制システム開発",
    industry: "公共・社会インフラ",
    phase: "設計〜開発〜テスト",
    tech: ["Java"],
    teamSize: "2〜6名程度",
    notes: "アジャイル開発",
  },
  {
    area: "札幌",
    title: "医療系Webアプリ開発＆保守",
    industry: "医療",
    phase: "設計〜開発〜テスト",
    tech: ["C#"],
    teamSize: "2〜6名程度",
  },
  {
    area: "札幌",
    title: "3Dシミュレータソフト開発",
    industry: "シミュレーション",
    phase: "設計〜開発〜テスト",
    tech: ["C#"],
    teamSize: "2〜6名程度",
  },
  {
    area: "札幌",
    title: "5Gコアネットワーク開発",
    industry: "通信",
    phase: "設計〜開発〜テスト",
    tech: ["C#"],
    teamSize: "2〜6名程度",
  },
  {
    area: "札幌",
    title: "半導体製造装置開発",
    industry: "半導体",
    phase: "設計〜開発〜テスト",
    tech: ["C#"],
    teamSize: "2〜6名程度",
  },
  {
    area: "札幌",
    title: "車載系システム開発",
    industry: "自動車",
    phase: "設計〜開発〜テスト",
    tech: ["C++"],
    teamSize: "2〜6名程度",
  },
  {
    area: "札幌",
    title: "金融系システム開発",
    industry: "金融",
    phase: "設計〜開発〜テスト",
    tech: ["Java"],
    teamSize: "2〜6名程度",
  },
  {
    area: "盛岡",
    title: "重機遠隔操作システム開発",
    industry: "建設・重機",
    phase: "設計〜開発〜テスト",
    tech: ["C#"],
    teamSize: "2〜6名程度",
  },
  {
    area: "盛岡",
    title: "遠隔医療アプリ開発",
    industry: "医療",
    phase: "設計〜開発〜テスト",
    tech: ["C#", "React"],
    teamSize: "2〜6名程度",
  },
  {
    area: "盛岡",
    title: "OutSystems開発（住宅系）",
    industry: "住宅",
    phase: "設計〜開発〜テスト〜保守",
    tech: ["OutSystems"],
    teamSize: "2〜6名程度",
  },
  {
    area: "盛岡",
    title: "Salesforce開発（金融系）",
    industry: "金融",
    phase: "設計〜開発〜テスト〜保守",
    tech: ["Apex", "Salesforce"],
    teamSize: "2〜6名程度",
  },
  {
    area: "神奈川",
    title: "電気・電子回路設計",
    industry: "電気・電子",
    phase: "設計〜評価",
    tech: ["回路設計"],
    teamSize: "2〜6名程度",
  },
];

const areaOrder = ["札幌", "盛岡", "神奈川"];

const areaLabels = {
  札幌: "札幌エリア",
  盛岡: "盛岡エリア",
  神奈川: "神奈川エリア",
};

function groupByArea(items) {
  return areaOrder
    .map((area) => ({
      area,
      label: areaLabels[area],
      items: items.filter((item) => item.area === area),
    }))
    .filter((group) => group.items.length > 0);
}

function collectUnique(items, key) {
  return [...new Set(items.flatMap((item) => item[key]))];
}

export default function BusinessContentPage() {
  const grouped = groupByArea(businessItems);
  const allIndustries = [...new Set(businessItems.map((item) => item.industry))];
  const allTechs = collectUnique(businessItems, "tech");

  return (
    <>
    <Header/>
      <Head>
        <title>業務内容 | MIK</title>
        <meta
          name="description"
          content="MIKの業務内容ページです。地域別・業種別・技術別に対応実績をわかりやすくご紹介します。"
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>

          <div style={styles.heroInner}>
            <p style={styles.eyebrow}>BUSINESS CONTENT</p>
            <h1 style={styles.heroTitle}>業務内容</h1>
            <p style={styles.heroText}>
              MIKでは、公共・医療・通信・金融・半導体・建設・住宅など、
              幅広い分野のシステム開発や設計業務に対応しています。
              <br />
              基本的に
              <strong>2名〜6名程度のチーム体制</strong>
              でのアサインが多く、
              設計から開発、テスト、保守まで一貫して対応できる案件体制を整えています。
            </p>

            <div style={styles.summaryBox}>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>対応地域</span>
                <span style={styles.summaryValue}>札幌 / 盛岡 / 仙台/ 東京/ 神奈川/ 大阪/ 福岡</span>
              </div>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>主な業種</span>
                <span style={styles.summaryValue}>{allIndustries.join(" / ")}</span>
              </div>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>主な技術</span>
                <span style={styles.summaryValue}>{allTechs.join(" / ")}</span>
              </div>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>参画体制</span>
                <span style={styles.summaryValue}>2名〜6名程度のチーム参画が中心</span>
              </div>
            </div>
          </div>

        </section>

        <section style={styles.section}>
          <div style={styles.sectionInner}>
            <h2 style={styles.sectionTitle}>地域別の業務実績</h2>
            <p style={styles.sectionLead}>
              弊社人材が関わってきた業務内容を地域別に掲載しています。
            </p>

            {grouped.map((group) => (
              <div key={group.area} style={styles.areaBlock}>
                <div style={styles.areaHeader}>
                  <h3 style={styles.areaTitle}>{group.label}</h3>
                </div>

                <div style={styles.cardGrid}>
                  {group.items.map((item) => (
                    <article key={`${item.area}-${item.title}`} style={styles.card}>
                      <div style={styles.cardTop}>
                        <span style={styles.industryBadge}>{item.industry}</span>
                        <span style={styles.teamBadge}>チーム参画 {item.teamSize}</span>
                      </div>

                      <h4 style={styles.cardTitle}>{item.title}</h4>

                      {item.notes ? (
                        <p style={styles.cardNote}>{item.notes}</p>
                      ) : null}

                      <div style={styles.detailList}>
                        <div style={styles.detailRow}>
                          <span style={styles.detailLabel}>工程</span>
                          <span style={styles.detailValue}>{item.phase}</span>
                        </div>

                        <div style={styles.detailRow}>
                          <span style={styles.detailLabel}>技術</span>
                          <div style={styles.techList}>
                            {item.tech.map((tech) => (
                              <span key={tech} style={styles.techBadge}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={styles.detailRow}>
                          <span style={styles.detailLabel}>体制</span>
                          <span style={styles.detailValue}>
                            複数名チームでの対応を前提とした参画実績
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.bottomSection}>
          <div style={styles.bottomInner}>
            <h2 style={styles.bottomTitle}>MIKの対応体制</h2>
            <div style={styles.bottomGrid}>
              <div style={styles.bottomCard}>
                <h3 style={styles.bottomCardTitle}>幅広い業種に対応</h3>
                <p style={styles.bottomCardText}>
                  公共、医療、金融、通信、半導体、住宅、建設など、
                  多様な分野の業務知識を踏まえた対応が可能です。
                </p>
              </div>

              <div style={styles.bottomCard}>
                <h3 style={styles.bottomCardTitle}>上流から下流まで一貫対応</h3>
                <p style={styles.bottomCardText}>
                  設計、開発、テストに加え、案件によっては保守まで含めた
                  継続的な支援を行っています。
                </p>
              </div>

              <div style={styles.bottomCard}>
                <h3 style={styles.bottomCardTitle}>チームでの参画が中心</h3>
                <p style={styles.bottomCardText}>
                  2名〜6名程度のチームアサインが多く、
                  単独参画ではなく、連携しながら品質と安定性を高める体制を強みとしています。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    backgroundColor: "#ffffff",
    color: "#576066",
    fontFamily:
      '"Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", serif',
  },
  hero: {
    background: "linear-gradient(135deg, #c1ff72 0%, #e8ffc1 45%, #ffffff 100%)",
    padding: "80px 20px 70px",
  },
  heroInner: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  eyebrow: {
    display: "inline-block",
    marginBottom: "16px",
    padding: "6px 12px",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "0.18em",
  },
  heroTitle: {
    fontSize: "48px",
    margin: "0 0 20px",
    color: "#2f3a40",
  },
  heroText: {
    fontSize: "18px",
    lineHeight: "2",
    maxWidth: "900px",
    marginBottom: "32px",
  },
  summaryBox: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  },
  summaryItem: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    border: "1px solid #eef1f4",
  },
  summaryLabel: {
    display: "block",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "0.12em",
    color: "#7d8790",
    marginBottom: "10px",
  },
  summaryValue: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#344047",
  },
  section: {
    padding: "80px 20px",
  },
  sectionInner: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "38px",
    marginBottom: "16px",
    color: "#2f3a40",
  },
  sectionLead: {
    fontSize: "17px",
    lineHeight: "1.9",
    marginBottom: "40px",
  },
  areaBlock: {
    marginBottom: "64px",
  },
  areaHeader: {
    marginBottom: "24px",
    borderLeft: "8px solid #c1ff72",
    paddingLeft: "16px",
  },
  areaTitle: {
    fontSize: "30px",
    margin: "0 0 8px",
    color: "#2f3a40",
  },
  areaSub: {
    margin: 0,
    fontSize: "15px",
    color: "#7d8790",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "24px",
    border: "1px solid #edf1f4",
    boxShadow: "0 10px 24px rgba(0,0,0,0.05)",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "18px",
  },
  industryBadge: {
    backgroundColor: "#c1ff72",
    color: "#2f3a40",
    fontSize: "13px",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "999px",
  },
  teamBadge: {
    backgroundColor: "#f5f7f8",
    color: "#576066",
    fontSize: "12px",
    padding: "8px 12px",
    borderRadius: "999px",
    border: "1px solid #e3e8eb",
  },
  cardTitle: {
    fontSize: "25px",
    lineHeight: "1.5",
    margin: "0 0 10px",
    color: "#2f3a40",
  },
  cardNote: {
    fontSize: "14px",
    color: "#6b7680",
    margin: "0 0 20px",
  },
  detailList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  detailRow: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    paddingTop: "12px",
    borderTop: "1px solid #eef2f4",
  },
  detailLabel: {
    fontSize: "13px",
    fontWeight: "bold",
    letterSpacing: "0.08em",
    color: "#7d8790",
  },
  detailValue: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#344047",
  },
  techList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  techBadge: {
    backgroundColor: "#eef8db",
    color: "#38511c",
    borderRadius: "999px",
    padding: "6px 10px",
    fontSize: "13px",
    fontWeight: "bold",
  },
  bottomSection: {
    backgroundColor: "#f8fbf1",
    padding: "80px 20px",
  },
  bottomInner: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  bottomTitle: {
    fontSize: "36px",
    marginBottom: "28px",
    color: "#2f3a40",
  },
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  bottomCard: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "24px",
    border: "1px solid #edf1f4",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },
  bottomCardTitle: {
    fontSize: "22px",
    margin: "0 0 12px",
    color: "#2f3a40",
  },
  bottomCardText: {
    fontSize: "15px",
    lineHeight: "1.9",
    margin: 0,
  },
};