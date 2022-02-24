export const shortenAddress = (address) => `${address.slice(0, 10)}...${address.slice(30)}`;
export const shortenAddress2 = (address) => `${address.slice(0, 8)}...${address.slice(address.length - 4)}`;
