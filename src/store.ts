import type { Metadata } from './types';
import { writable } from 'svelte/store';
import { ethers } from 'ethers';

export const generateMetadata = (hash: string[]): Metadata => ({
	hair: {
		style: parseInt(hash.splice(0, 2).join(''), 16) % 15,
		color: parseInt(hash.splice(0, 2).join(''), 16) % 4
	},
	eyes: parseInt(hash.splice(0, 2).join(''), 16) % 6 > 3,
	blood: parseInt(hash.splice(0, 2).join(''), 16) % 7,
	body: parseInt(hash.splice(0, 2).join(''), 16) % 5,
	background: {
		color: parseInt(hash.splice(0, 2).join(''), 16) % 5,
		style: parseInt(hash.splice(0, 2).join(''), 16) % 2
	},
	hat: {
		style: 0,
		color: 0
	},
	gore: parseInt(hash.splice(0, 2).join(''), 16) % 4,
	outfit: {
		style: parseInt(hash.splice(0, 2).join(''), 16) % 7,
		color: parseInt(hash.splice(0, 2).join(''), 16) % 5
	},
	accessory: 0,
	skulls: 0
});
export const generateHash = (string: string) => {
	return parseInt(ethers.utils.keccak256(ethers.utils.id(string)))
		.toString()
		.split('');
};
export const metadata = writable<Metadata>({
	hair: {
		style: 0,
		color: 0
	},
	eyes: false,
	blood: 0,
	body: 0,
	background: {
		color: 0,
		style: 0
	},
	hat: {
		style: 0,
		color: 0
	},
	gore: 0,
	outfit: {
		style: 0,
		color: 0
	},
	accessory: 0,
	skulls: 0
});

export const colorMatrix = [
	['#ADB1B6', '#5A646D', '#313D48'],
	['#99DACF', '#00A388', '#4D6D68'],
	['#F3E9B9', '#E1C84F', '#716428'],
	['#EBC6AE', '#CE7135', '#9B5528'],
	['#E9B9B0', '#C8513A', '#80311C']
];

export const hash = writable<string[]>([]);
export const provider = writable<ethers.providers.Web3Provider | undefined>();
export const magic = writable<any | undefined>();
export const address = writable<string | undefined>();
export const NAGIC_API = 'pk_live_8DE8A716D08CAA9A';
export const loading = writable<boolean>(false);
export const menu = writable<boolean>(false);
