import type {StillImageFormat} from '@remotion/renderer';
import type React from 'react';
import {createContext} from 'react';
import type {RenderJob} from '../../preview-server/render-queue/job';
import type {QuickSwitcherMode} from '../components/QuickSwitcher/NoResults';
import type {UpdateInfo} from '../components/UpdateCheck';

export type CompType = 'composition' | 'still';

export type RenderModalState = {
	type: 'render';
	compositionId: string;
	initialFrame: number;
	initialImageFormat: StillImageFormat;
	initialQuality: number | null;
	initialOutName: string;
	initialScale: number;
	initialVerbose: boolean;
};

export type ModalState =
	| {
			type: 'new-comp';
			compType: CompType;
	  }
	| RenderModalState
	| {
			type: 'render-error';
			job: RenderJob;
	  }
	| {
			type: 'update';
			info: UpdateInfo;
	  }
	| {
			type: 'quick-switcher';
			mode: QuickSwitcherMode;
			invocationTimestamp: number;
	  };

export type ModalContextType = {
	selectedModal: ModalState | null;
	setSelectedModal: React.Dispatch<React.SetStateAction<ModalState | null>>;
};

export const ModalsContext = createContext<ModalContextType>({
	selectedModal: null,
	setSelectedModal: () => undefined,
});
