import { siteConfig } from "@/config/site";

export function FooterInstitutional() {
  const { address, contact, technicalDirector } = siteConfig;
  const hasContact = Boolean(
    contact.phone || contact.whatsapp || contact.email,
  );

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
      <div>
        <h2 className="text-sm font-extrabold uppercase tracking-[var(--tracking-label)] text-[var(--if-green-300)]">
          Endereço
        </h2>
        <address className="mt-5 max-w-[28ch] text-sm not-italic leading-relaxed text-[var(--if-green-100)]">
          {address.street}
          <br />
          {address.district}
          <br />
          {address.city} — {address.state}
          <br />
          {address.country}
        </address>
      </div>

      <div>
        <h2 className="text-sm font-extrabold uppercase tracking-[var(--tracking-label)] text-[var(--if-green-300)]">
          Responsável técnico
        </h2>
        <p className="mt-5 text-sm font-semibold text-[var(--if-white)]">
          {technicalDirector.name}
        </p>
        <p className="mt-1 text-sm text-[var(--if-green-200)]">
          {technicalDirector.registration}
        </p>
      </div>

      {hasContact && (
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[var(--tracking-label)] text-[var(--if-green-300)]">
            Contato
          </h2>
          <div className="mt-5 space-y-2 text-sm text-[var(--if-green-100)]">
            {contact.phone && <p>{contact.phone}</p>}
            {contact.whatsapp && <p>{contact.whatsapp}</p>}
            {contact.email && <p>{contact.email}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
