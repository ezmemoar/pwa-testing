const eInfo = (title, customClass = "") => `<div class="has-text-centered py-6 ${customClass}">${title}</div>`;

const eCard = (title, callback = () => {}) => `
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="has-text-primary" onclick="${callback}" style="cursor: pointer;">${title}</a>
      </div>
    </div>
  </div>
`;
