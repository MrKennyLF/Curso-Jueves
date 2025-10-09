<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Luis Moreno — Perfil</title>
  <style>
    :root{
      --bg:#0f1724;
      --card:#0b1220;
      --muted:#9aa4b2;
      --accent:#06b6d4;
      --glass: rgba(255,255,255,0.03);
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      background:linear-gradient(180deg,#071022 0%, #07182a 100%);
      color:#e6f0f6;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      padding:28px;
    }
    .container{
      max-width:900px;
      margin:0 auto;
      display:grid;
      gap:18px;
    }
    header{
      display:flex;
      gap:16px;
      align-items:center;
    }
    .avatar{
      width:96px;
      height:96px;
      border-radius:14px;
      background:linear-gradient(135deg,var(--accent),#60a5fa);
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:700;
      color:#062023;
      font-size:28px;
      box-shadow:0 6px 18px rgba(6,22,33,0.6);
      flex:0 0 96px;
    }
    h1{margin:0;font-size:22px;letter-spacing:-0.4px}
    p.lead{margin:6px 0 0;color:var(--muted)}
    main{
      display:grid;
      gap:14px;
      grid-template-columns: 1fr;
    }
    .card{
      background:linear-gradient(180deg,var(--card), rgba(11,17,32,0.9));
      border-radius:12px;
      padding:16px;
      box-shadow: 0 4px 18px rgba(2,6,12,0.6);
      border: 1px solid rgba(255,255,255,0.03);
    }
    .grid-2{
      display:grid;
      gap:12px;
      grid-template-columns: 1fr 320px;
    }
    ul.skills{display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:8px 0 0;list-style:none}
    ul.skills li{
      background:var(--glass);
      padding:8px 10px;
      border-radius:8px;
      color:var(--muted);
      font-weight:600;
      font-size:13px;
      border:1px solid rgba(255,255,255,0.02);
    }
    .meta{color:var(--muted);font-size:13px}
    .projects li{margin-bottom:10px}
    footer{color:var(--muted);font-size:13px;text-align:center;padding:10px 0}
    @media (max-width:880px){
      .grid-2{grid-template-columns: 1fr}
      .avatar{width:80px;height:80px;font-size:24px}
    }
    .btn{
      display:inline-block;padding:10px 14px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#7c3aed);color:#021016;text-decoration:none;font-weight:700;
      box-shadow:0 8px 20px rgba(7,13,20,0.5);
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="avatar">LM</div>
      <div>
        <h1>Luis Moreno</h1>
        <p class="lead">Desarrollador/Creación 3D · Especializado en Unity y Realidad Virtual (VR). Trabajo con Blender (.blend) y manejo de bases de datos con PHPMyAdmin.</p>
        <div style="margin-top:8px;">
          <span class="meta">Monterrey, México · Disponible para proyectos personales y colaboraciones</span>
        </div>
      </div>
    </header>

    <main>
      <section class="card grid-2">
        <div>
          <h2>Sobre mí</h2>
          <p class="meta">Soy desarrollador que crea escenas 3D y experiencias en Unity con enfoque en VR. Me interesa tanto la parte técnica (scripts, interacción, animaciones) como la presentación y usabilidad de los menús y la interacción en realidad virtual.</p>

          <h3 style="margin-top:12px">Habilidades</h3>
          <ul class="skills">
            <li>Unity (URP)</li>
            <li>Realidad Virtual (VR)</li>
            <li>Blender 4.x (.blend)</li>
            <li>Mixamo / Animaciones</li>
            <li>PHPMyAdmin / MySQL</li>
            <li>UI/UX para menús</li>
            <li>Scripting C#</li>
          </ul>

          <h3 style="margin-top:12px">Experiencia breve</h3>
          <p class="meta">He trabajado en proyectos de simulación VR —por ejemplo, una máquina inyectora simulada— y sistemas de catálogo/productos para aplicaciones. También experiencia previa como almacenista (Callaway, 2021–2022).</p>
        </div>

        <aside>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div class="card" style="padding:12px;">
              <h3>Proyectos destacados</h3>
              <ul class="projects" style="padding-left:16px;margin:6px 0 0;">
                <li><strong>Simulación de máquina inyectora (VR)</strong> — Manual técnico y escenas interactivas.</li>
                <li><strong>Catálogo de productos</strong> — Registro, gestión y entrada de stock con UI tipo marketplace.</li>
                <li><strong>Integración Mixamo</strong> — NPC con animaciones y movimiento en zonas específicas.</li>
              </ul>
            </div>

            <div class="card" style="padding:12px;">
              <h3>Contacto</h3>
              <p class="meta">Edita aquí tu email o link a GitHub/Portfolio.</p>
              <p style="margin:8px 0;"><a class="btn" href="#" onclick="alert('Sustituye # por tu enlace');return false">Editar contacto</a></p>
            </div>

            <div class="card" style="padding:12px;">
              <h3>Nota rápida</h3>
              <p class="meta">Este perfil es totalmente editable. Cambia textos, colores o añade enlaces a tus repositorios y portafolio.</p>
            </div>
          </div>
        </aside>
      </section>

      <section class="card">
        <h2>Resumen descargable</h2>
        <p class="meta">Puedes copiar esta página, o exportarla a PDF desde tu navegador para compartirla rápidamente.</p>
      </section>
    </main>

    <footer>
      Hecho con ♥ · Edita este archivo para personalizar tu presentación.
    </footer>
  </div>
</body>
</html>
