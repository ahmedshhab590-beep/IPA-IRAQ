
"use client";

import { useState } from "react";

const apps = [
  { name: "IPA Player", category: "Tools", icon: "▶️", version: "1.0.0", description: "Your media experience" },
  { name: "Game Center", category: "Games", icon: "🎮", version: "2.1.0", description: "Discover amazing games" },
  { name: "File Manager", category: "Tools", icon: "📁", version: "1.4.0", description: "Manage your files easily" },
  { name: "Photo Studio", category: "Photo", icon: "📸", version: "3.0.0", description: "Creative photo tools" },
  { name: "Music Hub", category: "Music", icon: "🎵", version: "1.2.0", description: "Your favorite music" },
  { name: "Space Quest", category: "Games", icon: "🚀", version: "1.0.2", description: "Explore a new universe" }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = apps.filter(app =>
    app.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || app.category === category)
  );

  return (
    <main style={{
      minHeight: "100vh",
      background: "#090912",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      padding: "24px 18px",
    }}>
      <style>{`
        * { box-sizing: border-box; }
        button, input { font: inherit; }
        button { cursor: pointer; }
        .app-card {
          background: #151522;
          border: 1px solid #29283b;
          border-radius: 18px;
          padding: 16px;
          transition: .2s;
        }
        .app-card:hover { border-color: #8855ff; transform: translateY(-3px); }
        .category {
          border: 1px solid #302c46;
          color: #aaa4c1;
          background: #151522;
          border-radius: 30px;
          padding: 10px 17px;
          white-space: nowrap;
        }
        .category.active {
          color: white;
          background: #7145db;
          border-color: #9168ff;
        }
        .app-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }
        @media(min-width:700px) {
          .app-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>

      <header style={{
        maxWidth: 1050,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #252438",
        paddingBottom: 20
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>      
       
<div style={{
  width: 52,
  height: 52,
  borderRadius: 16,
  background: "linear-gradient(145deg,#1b1035,#080810)",
  border: "1.5px solid #9b55ff",
  boxShadow: "0 0 18px #7435d966",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1
}}>
  <strong style={{
    fontSize: 19,
    fontStyle: "italic",
    color: "#ffffff",
    letterSpacing: -1
  }}>IPA</strong>
  <span style={{
    fontSize: 9,
    color: "#bd83ff",
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 3
  }}>HUB</span>
</div>
   
          <strong style={{fontSize:22,letterSpacing:1}}>IPA <span style={{color:"#a77aff"}}>HUB</span></strong>
        </div>
        <button style={{
          background:"#211b37",color:"#c7aaff",
          border:"1px solid #4a3479",borderRadius:12,
          padding:"10px 15px"
        }}>Sign In</button>
      </header>

      <section style={{maxWidth:1050,margin:"55px auto 35px"}}>
        <div style={{
          display:"inline-block",padding:"8px 13px",
          borderRadius:30,background:"#211833",
          color:"#c5a4ff",fontSize:12,marginBottom:18
        }}>✦ THE ULTIMATE iOS APP STORE</div>

        <h1 style={{
          fontSize:"clamp(38px,8vw,65px)",
          lineHeight:1.1,margin:"0 0 16px",
          letterSpacing:-2
        }}>
          Discover Your <br/>
          <span style={{
            background:"linear-gradient(90deg,#b38aff,#6e8dff)",
            WebkitBackgroundClip:"text",
            color:"transparent"
          }}>Next Favorite App.</span>
        </h1>

        <p style={{color:"#9997ad",lineHeight:1.8,maxWidth:470}}>
          Explore a world of iOS apps and games.
          Discover, download and enjoy your favorites.
        </p>

        <div style={{
          display:"flex",alignItems:"center",gap:10,
          background:"#151522",border:"1px solid #343047",
          borderRadius:15,padding:"5px 15px",marginTop:28
        }}>
          <span>⌕</span>
          <input
            value={search}
            onChange={e=>setSearch(e.target.value)}
            placeholder="Search apps and games..."
            style={{
              width:"100%",background:"transparent",
              border:0,outline:0,color:"white",padding:"13px 0"
            }}
          />
        </div>
      </section>

      <section style={{maxWidth:1050,margin:"0 auto"}}>
        <div style={{
          background:"linear-gradient(120deg,#25164b,#172044)",
          border:"1px solid #493478",
          borderRadius:22,padding:24,marginBottom:38
        }}>
          <div style={{color:"#c6a4ff",fontSize:12}}>IPA HUB FEATURE</div>
          <h2 style={{fontSize:27,margin:"13px 0 8px"}}>Your iOS World.</h2>
          <p style={{color:"#b2accb",fontSize:14,lineHeight:1.7}}>
            Discover apps, explore games and find something new.
          </p>
          <div style={{fontSize:35,marginTop:12}}>📱 ✨ 🎮</div>
        </div>

        <h2 style={{fontSize:21,marginBottom:18}}>Explore Categories</h2>

        <div style={{
          display:"flex",gap:9,overflowX:"auto",
          paddingBottom:23
        }}>
          {["All","Games","Tools","Photo","Music"].map(c=>(
            <button key={c}
              onClick={()=>setCategory(c)}
              className={`category ${category===c?"active":""}`}
            >{c}</button>
          ))}
        </div>

        <div style={{
          display:"flex",justifyContent:"space-between",
          alignItems:"center",marginBottom:18
        }}>
          <h2 style={{fontSize:21,margin:0}}>Popular Apps</h2>
          <span style={{color:"#a58aff",fontSize:13}}>Explore all ↗</span>
        </div>

        <div className="app-grid">
          {filtered.map(app=>(
            <article key={app.name} className="app-card">
              <div style={{
                width:55,height:55,borderRadius:16,
                background:"linear-gradient(135deg,#292344,#44316c)",
                display:"grid",placeItems:"center",fontSize:28,
                marginBottom:15
              }}>{app.icon}</div>
              <strong style={{fontSize:16}}>{app.name}</strong>
              <p style={{color:"#9997ad",fontSize:12,margin:"8px 0"}}>
                {app.description}
              </p>
              <div style={{
                display:"flex",justifyContent:"space-between",
                alignItems:"center",marginTop:16
              }}>
                <span style={{color:"#817c98",fontSize:11}}>v{app.version}</span>
                <button style={{
                  background:"#7145db",color:"white",
                  border:0,borderRadius:9,padding:"8px 13px",
                  fontSize:12
                }}>Details</button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length===0 && (
          <p style={{textAlign:"center",color:"#999",padding:30}}>
            No apps found.
          </p>
        )}
      </
 </section>
<footer style={{
  maxWidth: 1050,
  margin: "65px auto 0",
  borderTop: "1px solid #29263a",
  padding: "30px 0",
  textAlign: "center",
  color: "#77748c",
  fontSize: 12
}}>
  <strong style={{
    fontSize: 18,
    letterSpacing: 1,
    color: "#ffffff"
  }}>
    IPA <span style={{color:"#a77aff"}}>HUB</span>
  </strong>

  <p style={{marginTop:15}}>
    © 2026 IPA HUB. All rights reserved.
  </p>

  <p>Your Apps. Your Store. Your Choice.</p>

  <div style={{
    marginTop: 22,
    paddingTop: 18,
    borderTop: "1px solid #29263a"
  }}>
    <p style={{color:"#bda4f5",fontSize:13}}>
      Founded & Owned by
    </p>
    <strong style={{color:"#ffffff",fontSize:15}}>
      Ahmed Al-Mousawi
    </strong>
    <p style={{color:"#77748c",marginTop:6}}>
      المؤسس والمالك — أحمد الموسوي
    </p>
  </div>
</footer>
</main>
);
}

    
