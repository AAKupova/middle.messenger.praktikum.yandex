export const renderDom = (query:string, block) => {
  const root:HTMLElement | null = document.querySelector(query);

  if(root){
    root.appendChild(block.getElement());
    block.initDidUpdate();
    return root;
  }
};
