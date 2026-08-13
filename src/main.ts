import './style.css'

import heroImage from './assets/hero.png'
import plusabLogo from './assets/plusab-logo.png'
import hlrLogo from './assets/hlr-konsulten-logo.png'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Kunde inte hitta #app')
}

app.innerHTML = `
  <header class="site-header">
    <div class="container header-inner">

      <a href="/" class="plusab-brand" aria-label="Plusab">
        <img
          src="${plusabLogo}"
          alt="Plusab - Protecting People"
        />
      </a>

      <nav class="main-nav" aria-label="Huvudmeny">
        

        <a
          href="https://www.hlr-konsulten.se/om-oss"
          target="_blank"
          rel="noopener noreferrer"
          class="header-cta"
        >
          Kontakta Oss
        </a>
      </nav>

    </div>
  </header>


  <main>

    <!-- HERO -->

    <section class="hero">

      <div class="hero-image">
        <img
          src="${heroImage}"
          alt="Första hjälpen, hjärtsäkerhet och hälsa"
        />
      </div>

      <div class="hero-gradient"></div>

      <div class="container hero-container">

        <div class="hero-content">

          <h1 class="hero-title">
            Plusab är nu en del av
          </h1>

          <div class="accent-line"></div>

          <img
            class="hlr-logo"
            src="${hlrLogo}"
            alt="HLR Konsulten"
          />

          <p class="hero-copy">
            Plusabs produkter och kunskap inom första hjälpen finns nu
            samlade hos HLR Konsulten. Där hittar du vårt sortiment,
            support och hjälp med rätt lösning för din verksamhet.
          </p>

          <div class="hero-buttons">

            <a
              href="https://www.hlr-konsulten.se"
              target="_blank"
              rel="noopener noreferrer"
              class="button button-primary"
            >
              Besök HLR Konsulten
              
            </a>

            <a
              href="https://www.hlr-konsulten.se/plusab-blir-en-del-av-hlr-konsulten"
              class="read-more"
            >
              Läs mer 
              
            </a>

          </div>

        </div>

      </div>

    </section>


    <!-- INFO -->

    <section
      class="benefits"
      id="om-plusab"
    >

      <div class="container benefits-grid">

        <article class="benefit">

          <div class="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </div>

          <h2>
            Samma fokus<br />
            på trygghet
          </h2>

          <p>
            Vi fortsätter att skydda människor och skapa tryggare
            arbetsplatser.
          </p>

        </article>


        <article class="benefit">

          <div class="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
              />

              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M3 10h18" />
              <path d="M8 15h2" />
              <path d="M14 15h2" />
            </svg>
          </div>

          <h2>
            Större sortiment,<br />
            större möjligheter
          </h2>

          <p>
            Produkter inom första hjälpen och hjärtsäkerhet finns nu
            samlade hos HLR Konsulten.
          </p>

        </article>


        <article class="benefit">

          <div class="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 14a8 8 0 0 1 16 0" />
              <path d="M4 14v4" />
              <path d="M20 14v4" />

              <rect
                x="2"
                y="13"
                width="4"
                height="6"
                rx="2"
              />

              <rect
                x="18"
                y="13"
                width="4"
                height="6"
                rx="2"
              />

              <path d="M18 19c0 1.1-.9 2-2 2h-2" />
            </svg>
          </div>

          <h2>
            Kunnig support<br />
            när du behöver den
          </h2>

          <p>
            Få hjälp att hitta rätt produkter och lösningar utifrån
            verksamhetens behov.
          </p>

        </article>


        <article class="benefit">

          <div class="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <h2>
            En trygg partner<br />
            även framåt
          </h2>

          <p>
            Plusab lever vidare som en del av HLR Konsulten med fortsatt
            fokus på kvalitet och trygghet.
          </p>

        </article>

      </div>

    </section>


    <!-- RED CTA -->

    <section class="bottom-cta">

      <div class="container bottom-cta-inner">

        <div class="bottom-message">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>

          <p>
            Plusab är en del av
            <strong>HLR Konsulten</strong>
          </p>
        </div>

        <div class="bottom-divider"></div>

        <p class="bottom-link">
          Handla online

          <a
            href="https://www.hlr-konsulten.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hlr-konsulten.se →
          </a>
        </p>

      </div>

    </section>

  </main>
`