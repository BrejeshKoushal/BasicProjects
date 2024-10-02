
const sounds = {
    Q:new Audio('24-piano-keys/key01.ogg'),
    W:new Audio('24-piano-keys/key02.ogg'),
    E:new Audio('24-piano-keys/key03.ogg'),
    R:new Audio('24-piano-keys/key04.ogg'),
    T:new Audio('24-piano-keys/key05.ogg'),
    Y:new Audio('24-piano-keys/key06.ogg'),
    U:new Audio('24-piano-keys/key07.ogg'),
    I:new Audio('24-piano-keys/key08.ogg'),
    O:new Audio('24-piano-keys/key09.ogg'),
    P:new Audio('24-piano-keys/key10.ogg'),
    Z:new Audio('24-piano-keys/key11.ogg'),
    X:new Audio('24-piano-keys/key12.ogg'),
    C:new Audio('24-piano-keys/key13.ogg'),
    V:new Audio('24-piano-keys/key14.ogg'),
    B:new Audio('24-piano-keys/key15.ogg'),
    N:new Audio('24-piano-keys/key16.ogg'),
    M:new Audio('24-piano-keys/key17.ogg'),
    K:new Audio('24-piano-keys/key18.ogg'),
    L:new Audio('24-piano-keys/key19.ogg'),
};
let currentSound = null;
const keys = document.querySelectorAll('.white-key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
        currentSound = sounds[note];      
              currentSound.play();

        key.classList.add('clicked');
        setTimeout(() => key.classList.remove('clicked'), 100);
    });
});