import { makeAutoObservable } from "mobx";
import AnalysisServices from "../services/AnalysisServices";
import { IAnalysis } from "../models/IAnalysis";
export default class AnalysisStore {
  isExternalLoading = false;
  isPointLoading = false;

  currentExternalAnalysis = {} as IAnalysis | undefined;
  currentPointAnalysis = {} as IAnalysis | undefined;
  analysis = {} as IAnalysis | undefined;

  constructor() {
    makeAutoObservable(this);
    this.currentExternalAnalysis = undefined;
    this.currentPointAnalysis = undefined;
  }

  setAnalysis(analysis: IAnalysis | undefined) {
    this.analysis = analysis;
  }

  setCurrentExternalAnalysis(analysis: IAnalysis | undefined) {
    this.currentExternalAnalysis = analysis;
  }

  setCurrentPointAnalysis(analysis: IAnalysis | undefined) {
    this.currentPointAnalysis = analysis;
  }

  setExternalLoading(isLoading: boolean) {
    this.isExternalLoading = isLoading;
  }

  setPointLoading(isLoading: boolean) {
    this.isPointLoading = isLoading;
  }

  async externalAnalysis(vvp: string) {
    this.setExternalLoading(true);
    try {
      const response = await AnalysisServices.externalAnalysis(vvp);
    } catch (error) {
      console.log(error);
    } finally {
      this.setExternalLoading(false);
    }
  }

  async pointAnalysisAllPeople() {
    this.setPointLoading(true);
    try {
      const response = await AnalysisServices.pointAnalysisAllPeople();
    } catch (error) {
      console.log(error);
    } finally {
      this.setPointLoading(false);
    }
  }

  async pointAnalysisId() {
    this.setPointLoading(true);
    try {
      const response = await AnalysisServices.pointAnalysisId();
    } catch (error) {
      console.log(error);
    } finally {
      this.setPointLoading(false);
    }
  }

  async pointAnalysisBehavior() {
    this.setPointLoading(true);
    try {
      const response = await AnalysisServices.pointAnalysisBehavior()
    } catch (error) {
      console.log(error);
    } finally {
      this.setPointLoading(false);
    }
  }
}