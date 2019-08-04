<template>
  <div class="container">
    <h1>Slots</h1>
    <child >
      <h2 slot="title">Titulo Slot</h2>
      <div slot="body">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias exercitationem nam possimus soluta nisi eum commodi provident nihil obcaecati. Natus, officiis ab! Deleniti quas quam accusantium tempore tenetur praesentium? Adipisci?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eveniet. Autem esse dolorum nobis asperiores repudiandae sed debitis ex minima beatae saepe maxime accusamus veritatis illo porro, ab ipsum sit.</p>
      </div>
    </child>
  </div>
</template>

<script>
import Child from './Child'

export default {
  
  components: {
    Child
  }
}
</script>

