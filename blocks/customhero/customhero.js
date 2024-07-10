export default function decorate(block) {
    // block.textContent = '';
    const heroImgBlock = block.children[0];
    const boxTitleBlock = block.children[1];
    const boxContentTopBlock = block.children[2];
    const boxContentMiddleBlock = block.children[3];
    const boxContentBottomBlock = block.children[4];
    const card1Block = block.children[5];
    const card2Block = block.children[6];
    const card3Block = block.children[7];

    const heroImge = heroImgBlock.querySelector('picture');
    const boxTitle = boxTitleBlock.querySelector('div:last-child');
    const boxContentTop = boxContentTopBlock.querySelector('div:last-child');
    const boxContentMiddle = boxContentMiddleBlock.querySelector('div:last-child');
    const boxContentBottom = boxContentBottomBlock.querySelector('div:last-child');
    const card1Img = card1Block.querySelector('picture');
    const card1Text = card1Block.querySelector('div:last-child');
    const card2Img = card2Block.querySelector('picture');
    const card2Text = card2Block.querySelector('div:last-child');
    const card3Img = card3Block.querySelector('picture');
    const card3Text = card3Block.querySelector('div:last-child');

    console.log(heroImge, boxTitle, boxContentTop, boxContentMiddle, boxContentBottom, card1Img, card1Text, card2Img, card2Text, card3Img, card3Text);
    // console.log(block.children);
    // block.classList.add(`columns-${cols.length}-cols`);
  
    // // setup image columns
    // [...block.children].forEach((row) => {
    //   [...row.children].forEach((col) => {
    //     const pic = col.querySelector('picture');
    //     if (pic) {
    //       const picWrapper = pic.closest('div');
    //       if (picWrapper && picWrapper.children.length === 1) {
    //         // picture is only content in column
    //         picWrapper.classList.add('columns-img-col');
    //       }
    //     }
    //   });
    // });
  }