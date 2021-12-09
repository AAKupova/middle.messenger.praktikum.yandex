import ViewBlock from '../components/ViewBlock/ViewBlock';

export const renderDom = (query:string, block: ViewBlock) => {
  const root:HTMLElement | null = document.querySelector(query);

  if(root){
    root.appendChild(block.getElement());
    return root;
  }
};
