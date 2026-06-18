import PublicLayout from "../layouts/PublicLayout";
import PatrocinadoresHero from "../components/Patrocinadores/PatrocinadoresHero";
import SponsorCarousel from "../components/Patrocinadores/SponsorCarousel";
import SponsorCta from "../components/Patrocinadores/SponsorCta";
import PhotoShowcase from "../components/ui/PhotoShowcase";
import { pagePhotoSets } from "../data/publicPhotos";

export default function PatrocinadoresPage() {
  return (
    <PublicLayout className="web-public--patro patrocinadores-pagina">
      <PatrocinadoresHero />
      <PhotoShowcase
        className="photo-showcase--patro"
        eyebrow="Comunidad"
        title="Una marca conectada con su gente"
        subtitle="Las alianzas también se construyen mostrando el día a día del club."
        photos={pagePhotoSets.patrocinadores}
      />
      <SponsorCarousel />
      <SponsorCta />
    </PublicLayout>
  );
}
