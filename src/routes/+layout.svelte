<script>
    export let title = 'Christoph Fleschutz';
  </script>

<header>
    <h1>{title}</h1>
    <nav>
      <a href="/">about</a>
      <a href="/">projects</a>
      <a href="/">contact</a>
    </nav>
</header>

<main>
    <slot></slot> 
</main>

<footer>
    <p>&copy; 2024 Created by Christoph Fleschutz</p>
</footer>