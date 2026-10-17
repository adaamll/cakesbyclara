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
