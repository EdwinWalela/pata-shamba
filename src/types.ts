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

export interface SurveyInitialState {
	title: string;
	description: string;
	questions: SurveyQuestion[];
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
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
}

interface LandData {
	location: string;
	size: string;
	description: string;
	price: string;
	rate: string;
	id: number;
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
