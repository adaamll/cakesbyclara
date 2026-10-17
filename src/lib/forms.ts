/**
 * Gemensam hantering av formulären (beställning och provsmakning).
 *
 * Om formuläret har data-endpoint (från site.json → formEndpoint, t.ex. en
 * Formspree-adress) skickas det dit som FormData. Utan endpoint visas bara
 * tackmeddelandet, så att sajten fungerar innan en backend är kopplad.
 */
export function setupForm(form: HTMLFormElement, onSent: (data: FormData) => void) {
  const error = form.querySelector<HTMLElement>('.form-error');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (data.get('_gotcha')) return; // spamfälla

    // Flera ikryssade rutor (t.ex. specialkost) skickas som en rad: "Glutenfri, Vegansk"
    for (const key of new Set(data.keys())) {
      const values = data.getAll(key);
      if (values.length > 1) data.set(key, values.join(', '));
    }
    // Svara direkt i mejlet när kunden har angett en e-postadress
    const contact = String(data.get('Kontakt') || '');
    if (contact.includes('@')) data.set('_replyto', contact.trim());

    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      onSent(data);
      return;
    }

    if (button) button.disabled = true;
    if (error) error.hidden = true;
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      onSent(data);
    } catch {
      if (error) error.hidden = false;
    } finally {
      if (button) button.disabled = false;
    }
  });
}

/**
 * Visar ett meddelande i formulärkortet (t.ex. tack-rutan) och scrollar dit.
 * Formulären är långa, så utan scroll hamnar meddelandet ovanför skärmen.
 */
export function reveal(el: HTMLElement) {
  const card = el.closest<HTMLElement>('.form-card') ?? el;
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const heading = el.querySelector<HTMLElement>('h3, button, input');
  if (heading) {
    if (heading.tagName === 'H3') heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}
