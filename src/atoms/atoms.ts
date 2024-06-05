import { atom } from 'jotai';

// 로컬 스토리지에서 cart 데이터를 가져오는 함수
const getLocalStorageCart = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

// cartAtom 정의
export const cartAtom = atom(getLocalStorageCart());
