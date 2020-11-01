<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <g-image
        alt="Image of Michal"
        src="~/assets/images/profile.jpg"
        class="img-fluid img-profile rounded-circle mx-auto mb-2 d-lg-none"
        width="150"
      />
      <h1 class="mb-0">
        Michał
        <span class="text-primary">Konopka</span>
      </h1>
      <div class="subheading mb-5">
        Frontend Developer · 690 551 387 ·
        <a
          href="mailto:hello@michalkonopka.pl"
        >hello@michalkonopka.pl</a>
      </div>
      <p
        class="lead mb-5"
      >I am experienced in Vue.js and React.js in which I produce high quality code for my clients that are both well performing and well tested. Passionate about Progressive Web Applications and Server-Side Rendering solutions. I focus on solving problems, not only technical problems but creating an awesome experience for the users of my software both visual and accessible. Mixing powerful tools and knowledge about the users brings visual UI's to life and leads to webpages being accessible and useful.</p>
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/michal-konopka-frontend-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/konopek94" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']" />
        </a>
        <a href="https://twitter.com/konopekmichal" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'twitter']" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
