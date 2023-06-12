<template>
  <v-container>
    <v-row>
      <v-col tag="article">
        <section id="title">
          <h1 class="display-1 mb-1">
            {{ $t('views.about.section.main.title') }}
          </h1>
          <p v-html="$t('views.about.section.main.text')" />
        </section>
        <section id="about">
          <h2 class="headline mb-1">
            {{ $t('views.about.section.about.title') }}
          </h2>
          <p>
            {{ $t('views.about.section.about.text') }}
          </p>
        </section>
        <section id="map">
          <h2 class="headline mb-1">
            {{ $t('views.about.section.map.title') }}
          </h2>
          <p>
            <span v-html="$t('views.about.section.map.text[0]')" />
            <ol>
              <li>
                {{ $t('views.about.section.map.list[0]') }}
              </li>
            </ol>
          </p>
          <p>
            {{ $t('views.about.section.map.text[1]') }}
            <a
              href="https://geocode.maps.co/"
              target="_blank"
              rel="nofollow noreferrer external"
            >
              https://geocode.maps.co/
            </a>
          </p>
          <p>
            {{ $t('views.about.section.map.text[2]') }}
            <br>
            <ol start="2">
              <li>{{ $t('views.about.section.map.list[1]') }}</li>
              <li>{{ $t('views.about.section.map.list[2]') }}</li>
              <li>{{ $t('views.about.section.map.list[3]') }}</li>
              <li>{{ $t('views.about.section.map.list[4]') }}</li>
            </ol>
          </p>
          <p>
            {{ $t('views.about.section.map.text[3]') }}
          </p>
          <p>
            <b>{{ $t('views.about.additionally') }}</b>
            <ol>
              <li>{{ $t('views.about.section.map.additionalList[0]') }}</li>
              <li>{{ $t('views.about.section.map.additionalList[1]') }}</li>
              <li>{{ $t('views.about.section.map.additionalList[2]') }}</li>
            </ol>
          </p>
          <p v-html="$t('views.about.note')" /><p id="example">
            {{ $t('views.about.example') }}
            <br>
            <img
              class="example-image"
              src="@/assets/images/example.jpg"
              :alt="$t('view.about.exampleImageAlt')"
            >
          </p>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeView',
});
</script>

<style scoped lang="scss">
.example-image {
  display: block;
  width: 100%;
}
</style>
