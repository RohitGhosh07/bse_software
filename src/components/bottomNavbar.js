import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Orders Icon Component with dynamic color handling
const OrdersIcon = ({ color }) => (
    <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg" fill={color}>
        <path d="M31.0793 34.7685H25.4783C25.3304 34.7685 25.1959 34.6836 25.1321 34.5507C24.685 33.6183 23.7672 33.0393 22.7379 33.0393C21.7087 33.0393 20.7909 33.6186 20.3433 34.5507C20.2792 34.6836 20.1447 34.7685 19.9968 34.7685H14.9641C14.8162 34.7685 14.6817 34.6836 14.6179 34.5507C14.1704 33.6183 13.2529 33.0393 12.2233 33.0393C11.1937 33.0393 10.2763 33.6183 9.82874 34.5507C9.76496 34.6836 9.63011 34.7685 9.48221 34.7685H3.88125C3.66918 34.7685 3.49707 34.5968 3.49707 34.3843V0.576501C3.49707 0.364434 3.66918 0.192322 3.88125 0.192322H31.0793C31.2917 0.192322 31.4634 0.364434 31.4634 0.576501V34.3843C31.4634 34.5968 31.2917 34.7685 31.0793 34.7685ZM25.7103 34.0001H30.6955V0.960681H4.26543V34.0001H9.25055C9.8564 32.9421 10.9974 32.2709 12.2233 32.2709C13.4492 32.2709 14.5903 32.9421 15.1961 34.0001H19.7652C20.3714 32.9421 21.5128 32.2709 22.7379 32.2709C23.9635 32.2709 25.1045 32.9421 25.7103 34.0001Z" />
        <path d="M25.7995 8.42723H9.1614C8.94933 8.42723 8.77722 8.25512 8.77722 8.04305C8.77722 7.83099 8.94933 7.65887 9.1614 7.65887H25.7995C26.0119 7.65887 26.1836 8.04305 26.1836 8.25512C26.0119 8.42723 25.7995 8.42723 25.7995 8.42723Z" />
        <path d="M25.7995 13.6847H9.1614C8.94933 13.6847 8.77722 13.5126 8.77722 13.3006C8.77722 13.0885 8.94933 12.9164 9.1614 12.9164H25.7995C26.0119 12.9164 26.1836 13.3006 26.1836 13.5126C26.0119 13.6847 25.7995 13.6847 25.7995 13.6847Z" />
        <path d="M25.7995 18.9418H9.1614C8.94933 18.9418 8.77722 18.7701 8.77722 18.5576C8.77722 18.3452 8.94933 18.1735 9.1614 18.1735H25.7995C26.0119 18.1735 26.1836 18.5576 26.1836 18.7701C26.0119 18.9418 25.7995 18.9418 25.7995 18.9418Z" />
        <path d="M25.7994 24.199H19.1504C18.938 24.199 18.7662 24.0272 18.7662 23.8148C18.7662 23.6023 18.938 23.4306 19.1504 23.4306H25.7998C26.0122 23.4306 26.184 23.6023 26.184 23.8148C26.0119 24.199 25.7994 24.199 25.7994 24.199Z" />
    </svg>
);
// Market Icon Component
const MarketIcon = ({ color }) => (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.37919 40.1908C4.67491 40.1908 5.7253 39.1404 5.7253 37.8446C5.7253 36.5489 4.67491 35.4985 3.37919 35.4985C2.08347 35.4985 1.03308 36.5489 1.03308 37.8446C1.03308 39.1404 2.08347 40.1908 3.37919 40.1908Z" fill={color} />
        <path d="M25.5978 33.7312C26.8935 33.7312 27.9439 32.6808 27.9439 31.385C27.9439 30.0893 26.8935 29.0389 25.5978 29.0389C24.3021 29.0389 23.2517 30.0893 23.2517 31.385C23.2517 32.6808 24.3021 33.7312 25.5978 33.7312Z" fill={color} />
        <path d="M16.8523 25.7602C18.1481 25.7602 19.1984 24.7098 19.1984 23.414C19.1984 22.1183 18.1481 21.0679 16.8523 21.0679C15.5566 21.0679 14.5062 22.1183 14.5062 23.414C14.5062 24.7098 15.5566 25.7602 16.8523 25.7602Z" fill={color} />
        <path d="M14.3088 25.2949L5.33042 34.7719C5.28094 35.2936 5.5192 35.6889 6.35234 35.7362L15.3302 26.2593C15.2586 25.5601 14.8294 25.3406 14.3088 25.2949Z" fill={color} />
        <path d="M23.6169 28.7108L19.8971 25.1551C19.2624 25.1497 18.9666 25.5332 18.929 26.1732L22.6869 29.7655C23.4711 29.7521 23.7632 29.3745 23.6169 28.7108Z" fill={color} />
        <path d="M3.60235 35.6895C4.66569 35.6895 5.53055 36.5543 5.53055 37.6177C5.53055 38.681 4.66569 39.5459 3.60235 39.5459C2.53902 39.5459 1.67416 38.681 1.67416 37.6177C1.67416 36.5543 2.53902 35.6895 3.60235 35.6895ZM3.60235 34.2846C1.76129 34.2846 0.269287 35.7771 0.269287 37.6177C0.269287 39.4582 1.76129 40.9507 3.60235 40.9507C5.44342 40.9507 6.93542 39.4587 6.93542 37.6177C6.93542 35.7766 5.44288 34.2846 3.60235 34.2846Z" fill={color} />
        <path d="M17.0589 21.4853C18.1222 21.4853 18.9871 22.3502 18.9871 23.4135C18.9871 24.4768 18.1222 25.3417 17.0589 25.3417C15.9956 25.3417 15.1307 24.4768 15.1307 23.4135C15.1307 22.3502 15.9956 21.4853 17.0589 21.4853ZM17.0589 20.0804C15.2184 20.0804 13.7258 21.5724 13.7258 23.4135C13.7258 25.2546 15.2178 26.7466 17.0589 26.7466C18.9 26.7466 20.392 25.2546 20.392 23.4135C20.392 21.5724 18.9 20.0804 17.0589 20.0804Z" fill={color} />
        <path d="M25.5961 29.4595C26.6595 29.4595 27.5243 30.3244 27.5243 31.3877C27.5243 32.451 26.6595 33.3159 25.5961 33.3159C24.5328 33.3159 23.6679 32.451 23.6679 31.3877C23.6679 30.3244 24.5333 29.4595 25.5961 29.4595ZM25.5961 28.0546C23.7556 28.0546 22.2631 29.5466 22.2631 31.3877C22.2631 33.2288 23.7551 34.7208 25.5961 34.7208C27.4372 34.7208 28.9292 33.2288 28.9292 31.3877C28.9292 29.5466 27.4372 28.0546 25.5961 28.0546Z" fill={color} />
        <path d="M45.3428 8.86141C46.4062 8.86141 47.271 9.72628 47.271 10.7896C47.271 11.8529 46.4062 12.7178 45.3428 12.7178C44.2795 12.7178 43.4146 11.8529 43.4146 10.7896C43.4146 9.72628 44.2795 8.86141 45.3428 8.86141ZM45.3428 7.45654C43.5023 7.45654 42.0098 8.94854 42.0098 10.7896C42.0098 12.6307 43.5018 14.1227 45.3428 14.1227C47.1834 14.1227 48.6759 12.6307 48.6759 10.7896C48.6759 8.94854 47.1839 7.45654 45.3428 7.45654Z" fill={color} />
        <path d="M43.9471 13.1917C43.8756 12.4925 43.4464 12.273 42.9252 12.2273L33.9474 21.7042L27.2161 28.8098C27.1667 29.3315 27.4055 29.7268 28.2381 29.7742L37.2159 20.2972L43.9471 13.1917Z" fill={color} />
        <path d="M45.3423 13.1368C46.638 13.1368 47.6884 12.0864 47.6884 10.7907C47.6884 9.49497 46.638 8.44458 45.3423 8.44458C44.0466 8.44458 42.9962 9.49497 42.9962 10.7907C42.9962 12.0864 44.0466 13.1368 45.3423 13.1368Z" fill={color} />
    </svg>

);

const MenuIcon = ({ color }) => (
    <svg width="52" height="52" viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.1436 31.1698C4.34279 31.1698 3.59678 30.8507 3.04312 30.2725C2.48947 29.6932 2.20465 28.934 2.24004 28.1338L2.91812 12.9744L1.50601 11.4972C0.677236 10.6308 0.23431 9.44641 0.290247 8.24891L0.612738 1.31677C0.627578 1.0017 0.911827 0.768821 1.2092 0.772817C1.52428 0.787657 1.76743 1.05478 1.75316 1.36928L1.43067 8.30142C1.38957 9.18899 1.7172 10.0663 2.33136 10.7084L3.91185 12.362C4.01973 12.4744 4.07681 12.6262 4.06939 12.7815L3.38103 28.1852C3.35934 28.6709 3.53286 29.1321 3.86905 29.4831C4.54143 30.1869 5.74749 30.1863 6.41987 29.4831C6.75549 29.1315 6.929 28.6703 6.90731 28.1852L6.21895 12.7821C6.2121 12.6268 6.26861 12.475 6.37649 12.3625L7.95698 10.709C8.57057 10.0668 8.89877 9.18956 8.85767 8.30199L8.53518 1.36985C8.52091 1.05478 8.76407 0.787658 9.07914 0.773388C9.38565 0.75969 9.66133 1.0017 9.6756 1.31734L9.9981 8.24948C10.0535 9.44755 9.60996 10.6314 8.78176 11.4978L7.36965 12.975L8.04716 28.1344C8.08312 28.934 7.79773 29.6937 7.24465 30.2725C6.69099 30.8513 5.94441 31.1698 5.1436 31.1698Z" fill={color} />
        <path d="M3.74803 9.63918C3.43296 9.63918 3.17725 9.38347 3.17725 9.0684V1.34288C3.17725 1.0278 3.43296 0.772095 3.74803 0.772095C4.0631 0.772095 4.31881 1.0278 4.31881 1.34288V9.06783C4.31881 9.38347 4.0631 9.63918 3.74803 9.63918Z" fill={color} />
        <path d="M6.53917 9.63918C6.22409 9.63918 5.96838 9.38347 5.96838 9.0684V1.34288C5.96838 1.0278 6.22409 0.772095 6.53917 0.772095C6.85424 0.772095 7.10995 1.0278 7.10995 1.34288V9.06783C7.10995 9.38347 6.85481 9.63918 6.53917 9.63918Z" fill={color} />
        <path d="M46.8945 31.1696C46.0943 31.1696 45.3483 30.8505 44.794 30.2723C44.2404 29.6936 43.955 28.9338 43.9909 28.1342L44.6102 14.2808L43.9162 13.5844C42.3637 12.0267 41.766 9.74304 42.3574 7.6243L43.564 3.30006C43.9795 1.81204 45.3488 0.772644 46.8939 0.772644C48.439 0.772644 49.8089 1.81204 50.2239 3.30006L51.4305 7.62373C52.0218 9.74247 51.4242 12.0267 49.8717 13.5844L49.1776 14.2808L49.7969 28.1336C49.8329 28.9338 49.5469 29.6936 48.9938 30.2723C48.4408 30.8511 47.6947 31.1696 46.8945 31.1696ZM46.8945 1.91364C45.8591 1.91364 44.9424 2.60999 44.6639 3.60657L43.4573 7.93024C42.9767 9.65343 43.4624 11.5108 44.725 12.7773L45.596 13.6518C45.709 13.7653 45.7695 13.9206 45.7621 14.0798L45.1314 28.1838C45.1097 28.6696 45.2832 29.1308 45.6194 29.4818C46.2918 30.185 47.4978 30.185 48.1702 29.4818C48.5064 29.1308 48.6799 28.669 48.6582 28.1833L48.0275 14.0798C48.0201 13.92 48.0806 13.7648 48.1936 13.6518L49.0646 12.7773C50.3272 11.5108 50.8129 9.65343 50.3323 7.92967L49.1257 3.606C48.8466 2.60999 47.9293 1.91364 46.8945 1.91364Z" fill={color} />
        <path d="M25.9709 31.1696C17.5901 31.1696 10.7721 24.3511 10.7721 15.9709C10.7721 7.59065 17.5901 0.772095 25.9709 0.772095C34.3516 0.772095 41.1696 7.59008 41.1696 15.9709C41.1696 24.3516 34.3516 31.1696 25.9709 31.1696ZM25.9709 1.91366C18.2196 1.91366 11.9137 8.21965 11.9137 15.9709C11.9137 23.7221 18.2196 30.0281 25.9709 30.0281C33.7221 30.0281 40.0281 23.7221 40.0281 15.9709C40.0281 8.21965 33.7221 1.91366 25.9709 1.91366Z" fill={color} />
        <path d="M25.9708 26.5303C20.1483 26.5303 15.4114 21.7934 15.4114 15.9708C15.4114 10.1483 20.1483 5.41138 25.9708 5.41138C31.7934 5.41138 36.5303 10.1483 36.5303 15.9708C36.5303 21.7934 31.7934 26.5303 25.9708 26.5303ZM25.9708 6.55294C20.7779 6.55294 16.5529 10.7779 16.5529 15.9708C16.5529 21.1638 20.7779 25.3887 25.9708 25.3887C31.1638 25.3887 35.3887 21.1638 35.3887 15.9708C35.3887 10.7779 31.1638 6.55294 25.9708 6.55294Z" fill={color} />
        <path d="M20.263 16.5416C19.948 16.5416 19.6923 16.2859 19.6923 15.9709C19.6923 12.5085 22.5091 9.69226 25.9709 9.69226C26.2859 9.69226 26.5416 9.94797 26.5416 10.263C26.5416 10.5781 26.2859 10.8338 25.9709 10.8338C23.1386 10.8338 20.8338 13.1386 20.8338 15.9709C20.8338 16.2859 20.5781 16.5416 20.263 16.5416Z" fill={color} />
    </svg>

);
const ProfileIcon = ({ color }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Head */}
    <circle cx="26" cy="17" r="10" fill={color} />
    {/* Body */}
    <path
      d="M36 38C36 32.4772 31.5228 28 26 28C20.4772 28 16 32.4772 16 38V42H36V38Z"
      fill={color}
    />
  </svg>
);

// const getTotalItemCount = () => {
//     let totalCount = 0;
  
//     for (let key in localStorage) {
//       if (localStorage.hasOwnProperty(key) && key.startsWith('item_') && key.endsWith('_count')) {
//         const item = JSON.parse(localStorage.getItem(key));
//         totalCount += item.count;
//       }
//     }
  
//     return totalCount;
//   };
const getTotalItemTypesCount = () => {
  let itemCount = 0;

  for (let key in localStorage) {
    if (
      localStorage.hasOwnProperty(key) &&
      key.startsWith('item_') &&
      key.endsWith('_count')
    ) {
      const itemData = localStorage.getItem(key);
      const parsedItemData = itemData ? JSON.parse(itemData) : null;
      const count = parsedItemData ? parsedItemData.count : 0;

      if (count > 0) {
        itemCount += 1;
      }
    }
  }

  return itemCount;
};

  

  
  const CartIcon = ({ color, badgeCount }) => (
    <div style={{ position: 'relative', width: '42px', height: '42px' }}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.3011 29.3568H13.5536C11.4486 29.3568 9.69165 27.8465 9.3754 25.7655L6.76512 8.58756C6.72502 8.32201 6.80247 8.05186 6.97765 7.84809C7.15284 7.64432 7.40824 7.52722 7.67701 7.52722H38.9767C39.8089 7.52722 40.5862 7.89834 41.1103 8.54514C41.6336 9.19195 41.8346 10.0296 41.6612 10.8433L38.4346 26.0103C38.0224 27.9493 36.2835 29.3568 34.3011 29.3568ZM8.7498 9.37128L11.1992 25.4884C11.3771 26.6612 12.3674 27.5127 13.5536 27.5127H34.3011C35.4186 27.5127 36.3983 26.7193 36.6311 25.6267L39.8577 10.4593C39.9145 10.1919 39.8485 9.91713 39.6766 9.70506C39.5046 9.49299 39.2497 9.37082 38.9763 9.37082L8.7498 9.37128Z" fill={color}/>
        <path d="M7.67612 9.3713C7.22063 9.3713 6.82416 9.03384 6.7633 8.57006L6.48762 6.48119C6.35899 5.50569 5.51995 4.7699 4.53614 4.7699H1.15274C0.643783 4.7699 0.230713 4.35683 0.230713 3.84787C0.230713 3.33891 0.643783 2.92584 1.15274 2.92584H4.53614C6.44152 2.92584 8.0666 4.35038 8.31601 6.23962L8.59169 8.32848C8.65854 8.8333 8.3031 9.29662 7.79829 9.36346C7.75679 9.36854 7.71622 9.3713 7.67612 9.3713Z" fill={color}/>
        <path d="M13.6831 39.0271C11.4887 39.0271 9.70361 37.2415 9.70361 35.0471C9.70361 32.8527 11.4891 31.0676 13.6831 31.0676C15.8775 31.0676 17.663 32.8527 17.663 35.0471C17.663 37.2415 15.8775 39.0271 13.6831 39.0271ZM13.6831 32.9122C12.5057 32.9122 11.5477 33.8701 11.5477 35.0476C11.5477 36.2255 12.5057 37.1835 13.6831 37.1835C14.861 37.1835 15.819 36.2255 15.819 35.0476C15.819 33.8701 14.8605 32.9122 13.6831 32.9122Z" fill={color}/>
        <path d="M33.1191 39.0271C30.9247 39.0271 29.1392 37.2415 29.1392 35.0471C29.1392 32.8527 30.9247 31.0676 33.1191 31.0676C35.3135 31.0676 37.0986 32.8527 37.0986 35.0471C37.0986 37.2415 35.3135 39.0271 33.1191 39.0271ZM33.1191 32.9122C31.9412 32.9122 30.9832 33.8701 30.9832 35.0476C30.9832 36.2255 31.9412 37.1835 33.1191 37.1835C34.2965 37.1835 35.2545 36.2255 35.2545 35.0476C35.2545 33.8701 34.2965 32.9122 33.1191 32.9122Z" fill={color}/>
      </svg>
      <div style={{
       position: 'absolute',
       top: '0',
       right: '0',
       border: '2px solid black',
       color: 'black',
       backgroundColor: 'white',
       borderRadius: '50%',
       width: '22px',
       height: '22px',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       fontSize: '12px',
       fontWeight: 'bold'
      }}>
        {badgeCount}
      </div>
    </div>
  );
  
  const Cart = () => {
    const itemCount = getTotalItemTypesCount();
  
    return (
      <div>
        <CartIcon color="black" badgeCount={itemCount} />
      </div>
    );
  };
  

  

// const CartIcon = ({ color }) => (
//     <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M34.3011 29.3568H13.5536C11.4486 29.3568 9.69165 27.8465 9.3754 25.7655L6.76512 8.58756C6.72502 8.32201 6.80247 8.05186 6.97765 7.84809C7.15284 7.64432 7.40824 7.52722 7.67701 7.52722H38.9767C39.8089 7.52722 40.5862 7.89834 41.1103 8.54514C41.6336 9.19195 41.8346 10.0296 41.6612 10.8433L38.4346 26.0103C38.0224 27.9493 36.2835 29.3568 34.3011 29.3568ZM8.7498 9.37128L11.1992 25.4884C11.3771 26.6612 12.3674 27.5127 13.5536 27.5127H34.3011C35.4186 27.5127 36.3983 26.7193 36.6311 25.6267L39.8577 10.4593C39.9145 10.1919 39.8485 9.91713 39.6766 9.70506C39.5046 9.49299 39.2497 9.37082 38.9763 9.37082L8.7498 9.37128Z" fill={color}/>
//     <path d="M7.67612 9.3713C7.22063 9.3713 6.82416 9.03384 6.7633 8.57006L6.48762 6.48119C6.35899 5.50569 5.51995 4.7699 4.53614 4.7699H1.15274C0.643783 4.7699 0.230713 4.35683 0.230713 3.84787C0.230713 3.33891 0.643783 2.92584 1.15274 2.92584H4.53614C6.44152 2.92584 8.0666 4.35038 8.31601 6.23962L8.59169 8.32848C8.65854 8.8333 8.3031 9.29662 7.79829 9.36346C7.75679 9.36854 7.71622 9.3713 7.67612 9.3713Z" fill={color}/>
//     <path d="M13.6831 39.0271C11.4887 39.0271 9.70361 37.2415 9.70361 35.0471C9.70361 32.8527 11.4891 31.0676 13.6831 31.0676C15.8775 31.0676 17.663 32.8527 17.663 35.0471C17.663 37.2415 15.8775 39.0271 13.6831 39.0271ZM13.6831 32.9122C12.5057 32.9122 11.5477 33.8701 11.5477 35.0476C11.5477 36.2255 12.5057 37.1835 13.6831 37.1835C14.861 37.1835 15.819 36.2255 15.819 35.0476C15.819 33.8701 14.8605 32.9122 13.6831 32.9122Z" fill={color}/>
//     <path d="M33.1191 39.0271C30.9247 39.0271 29.1392 37.2415 29.1392 35.0471C29.1392 32.8527 30.9247 31.0676 33.1191 31.0676C35.3135 31.0676 37.0986 32.8527 37.0986 35.0471C37.0986 37.2415 35.3135 39.0271 33.1191 39.0271ZM33.1191 32.9122C31.9412 32.9122 30.9832 33.8701 30.9832 35.0476C30.9832 36.2255 31.9412 37.1835 33.1191 37.1835C34.2965 37.1835 35.2545 36.2255 35.2545 35.0476C35.2545 33.8701 34.2965 32.9122 33.1191 32.9122Z" fill={color}/>
//     </svg>

// );
const BottomNavbar = () => {
    const location = useLocation();
    const navItems = [
        { name: 'Orders', Icon: OrdersIcon, path: '/orders' },
        { name: 'Market', Icon: MarketIcon, path: '/market' },
        { name: 'Menu', Icon: MenuIcon, path: '/menu' },
        { name: 'Cart', Icon: Cart, path: '/cart' },
        { name: 'Profile', Icon: ProfileIcon, path: '/profile' }
    ];

    return (
        <div className="fixed z-50 bottom-0 left-0 right-0 bg-white bottomNavbarShadow" style={{ height: '70px' }}>
            <div className="flex justify-around items-center text-center py-2" style={{ height: '100%' }}>
                {navItems.map((item, index) => (
                    <Link key={index} to={item.path} className="flex flex-col items-center justify-center h-full" style={{ flex: 1 }}>
                        <item.Icon
                            color={location.pathname === item.path ? '#8C0B0D' : '#000000'} // Red when active, black otherwise
                            style={{ height: '24px', width: '24px' }} // Ensures uniform size for all icons
                        />
                        <span className={`text-xs mt-1 ${location.pathname === item.path ? 'text-red-800' : ''}`}>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BottomNavbar;