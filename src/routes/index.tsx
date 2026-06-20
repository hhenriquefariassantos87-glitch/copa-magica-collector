import figurinhasCopa from "@/assets/figurinhas-copa.png.asset.json";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Álbum da Copa em PDF — Coleção Completa por R$20" },
      { name: "description", content: "Baixe agora o álbum oficial da Copa em PDF com todas as figurinhas. Imprima quantas vezes quiser por apenas R$20." },
      { property: "og:title", content: "Álbum da Copa em PDF — R$20" },
      { property: "og:description", content: "Todas as figurinhas da Copa em PDF. Imprima em casa e complete seu álbum." },
    ],
  }),
  component: Index,
});

function Index() {
  const reviews = [
    { name: "Carlos M.", text: "Cara, valeu cada centavo! Imprimi pros meus filhos e a alegria foi enorme. Qualidade impecável!", date: "há 2 dias" },
    { name: "Juliana R.", text: "Achei que ia ser uma furada de R$20, mas as figurinhas vieram TOP. Igualzinhas às originais.", date: "há 4 dias" },
    { name: "Rodrigo P.", text: "Comprei na sexta, baixei na hora e já tava imprimindo. Melhor compra do ano, sem exagero.", date: "há 1 semana" },
    { name: "Fernanda L.", text: "Economizei uma fortuna! Meu sobrinho colou todas e ficou idêntico ao álbum oficial. Recomendo demais.", date: "há 1 semana" },
    { name: "Marcelo S.", text: "PDF em alta resolução, todas as seleções, todos os jogadores. R$20 é de graça por isso.", date: "há 2 semanas" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center text-white">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">
            🔥 Oferta por tempo limitado
          </span>
          <h1 className="mt-6 text-5xl font-black uppercase leading-none sm:text-7xl">
            Álbum da Copa<br/>
            <span className="bg-gold bg-clip-text text-transparent">em PDF</span>
          </h1>
          <img
            src={figurinhasCopa.url}
            alt="Figurinhas da Copa em PDF - álbum com todos os jogadores"
            className="mx-auto mt-8 max-w-2xl rounded-2xl shadow-2xl ring-2 ring-white/30"
            loading="eager"
          />
            Todas as figurinhas da Copa em alta resolução. Baixe, imprima em casa quantas vezes quiser e complete seu álbum sem gastar uma fortuna.
          </p>

          <div className="mt-10 inline-flex flex-col items-center gap-3 rounded-2xl bg-white/10 px-8 py-6 backdrop-blur-sm ring-1 ring-white/20">
            <span className="text-sm uppercase tracking-widest text-white/70 line-through">De R$ 149,90</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">R$</span>
              <span className="text-7xl font-black">20</span>
              <span className="text-2xl font-bold">,00</span>
            </div>
            <span className="text-sm text-white/80">pagamento único · acesso vitalício</span>
          </div>

          <div className="mt-8">
            <a href="#comprar" className="inline-block rounded-xl bg-gold px-10 py-5 text-lg font-black uppercase text-foreground shadow-gold transition hover:scale-105">
              Quero meu álbum agora →
            </a>
            <p className="mt-3 text-sm text-white/80">✅ Acesso imediato após o pagamento</p>
          </div>
        </div>
      </header>

      {/* BENEFITS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">O que você recebe</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { icon: "⚽", title: "Todas as Seleções", desc: "Figurinhas de cada time da Copa, completas e organizadas." },
            { icon: "🖨️", title: "Imprima Quantas Quiser", desc: "PDF em alta resolução. Imprima em casa, papelaria ou gráfica." },
            { icon: "⚡", title: "Acesso Imediato", desc: "Receba o link no seu e-mail segundos após o pagamento." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border bg-card p-6 text-center shadow-sm">
              <div className="text-4xl">{b.icon}</div>
              <h3 className="mt-4 text-xl font-bold uppercase">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <div className="text-3xl">⭐⭐⭐⭐⭐</div>
            <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">+2.000 clientes satisfeitos</h2>
            <p className="mt-2 text-muted-foreground">Veja o que estão dizendo:</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <article key={r.name} className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.date} · compra verificada</p>
                    </div>
                  </div>
                  <div className="text-secondary">★★★★★</div>
                </div>
                <p className="mt-4 text-foreground/90">"{r.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="comprar" className="bg-hero py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-black uppercase sm:text-5xl">Não fique de fora dessa Copa</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Por menos do que um lanche, leve para casa o álbum completo e viva cada jogo do seu jeito.
          </p>

          <div className="mt-10 rounded-3xl bg-white p-8 text-foreground shadow-2xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Álbum Copa — PDF Completo</p>
            <div className="mt-3 flex items-baseline justify-center gap-2">
              <span className="text-xl font-bold text-accent">R$</span>
              <span className="text-7xl font-black text-primary">20</span>
              <span className="text-xl font-bold text-accent">,00</span>
            </div>
            <p className="text-sm text-muted-foreground">à vista · ou em até 4x sem juros</p>

            <a href="#" className="mt-6 inline-block w-full rounded-xl bg-primary px-8 py-5 text-lg font-black uppercase text-primary-foreground transition hover:opacity-90">
              Comprar agora por R$ 20
            </a>

            <ul className="mt-6 space-y-2 text-left text-sm">
              <li>✅ Acesso vitalício ao PDF</li>
              <li>✅ Imprima quantas vezes quiser</li>
              <li>✅ Garantia de 7 dias ou seu dinheiro de volta</li>
              <li>✅ Suporte por e-mail</li>
            </ul>
          </div>

          <p className="mt-6 text-sm text-white/70">🔒 Compra 100% segura · Pagamento via Pix, cartão ou boleto</p>
        </div>
      </section>

      <footer className="bg-foreground py-8 text-center text-sm text-background/70">
        <p>© 2026 Álbum da Copa PDF. Produto digital não oficial.</p>
      </footer>
    </div>
  );
}
