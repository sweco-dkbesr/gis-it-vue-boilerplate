<template>
  <div class="home">

    <b-section>
      <b-container>
        <b-row>
          <b-col>
            <b-card
                title="Card Title"
                img-src="https://s3-us-west-1.amazonaws.com/co-directory-images/kasperthuno.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-section>
    <b-section>
      <b-container>

      </b-container>
    </b-section>

    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
      <p>For more information visit website</p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {}
}
</script>
