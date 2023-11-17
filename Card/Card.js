function CategoryChange(teaCard) {
  if (CURRENT_PRODUCT != null) {
    const teaPool = teaCard.shadowRoot.querySelector("tea-pool");
    teaPool.setAttribute("category", category);
  }
}
