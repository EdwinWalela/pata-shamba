export interface CreateSurveyInitialState {
	title: string;
	description: string;
	questions: SurveyQuestion[];
	payout: number;
	topup: number;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	surveyId: string;
	activePage: number;
}

export interface RegisterInitialState {}

export interface LandDetailInitialState {
	land: LandData;
	isLoading: boolean;
}

export interface Survey {
	title: string;
	description: string;
	questions: SurveyQuestion[];
	payout: number;
	topup: number;
	token: string;
}

export interface LandingInitialState {
	searchLocation: string;
	searchPrice: number;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: '';
	topPicks: LandData[];
	searchResults: LandData[];
	allLands: LandData[];
}

export interface DashboardInitialState {
	pendingLands: LandData[];
}

interface LandData {
	location: string;
	size: string;
	description: string;
	price: string;
	rate: string;
	id: number;
	isLoading: boolean;
	ownerPhone: string;
	isTitled: boolean;
	isFenced: boolean;
	ownerName: string;
}

export interface LoginInitialState {
	email: string;
	password: string;
	token: string;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
}

export interface User {
	email: string;
	password: string;
	phoneNumber: string;
	username: string;
}

export interface SurveyQuestion {
	title: string;
	type: string;
	choices: string[];
	required: boolean;
}
