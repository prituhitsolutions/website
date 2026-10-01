import Header from './components/Header.jsx';
import * as S from './components/Sections.jsx';
import { useReveal } from './hooks.js';

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <S.Hero /><S.Trust /><S.About /><S.Services /><S.Solutions /><S.Why />
        <S.Process /><S.Tech /><S.Portfolio /><S.Impact /><S.Testimonials />
        <S.FAQ /><S.FinalCTA /><S.Contact />
      </main>
      <S.Footer />
      <S.StickyCTA />
    </>
  );
}
