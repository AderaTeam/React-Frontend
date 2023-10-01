import { makeAutoObservable } from "mobx";
import AnalysisServices from "../services/AnalysisServices";
import { IAnalysis, IAnalysisAll } from "../models/IAnalysis";
export default class AnalysisStore {
  isExternalLoading = false;
  isPointLoading = false;

  currentExternalAnalysis = {} as IAnalysisAll | undefined;

  currentPointAnalysis = {} as IAnalysis | undefined;
  currentPointAnalysisAll = {} as IAnalysisAll | undefined;

  analysis = {} as IAnalysis | undefined;

  constructor() {
    makeAutoObservable(this);
    this.currentExternalAnalysis = undefined;
    this.currentPointAnalysis = undefined;
    this.currentPointAnalysisAll = undefined;
  }

  setAnalysis(analysis: IAnalysis | undefined) {
    this.analysis = analysis;
  }

  setCurrentExternalAnalysis(analysis: IAnalysisAll | undefined) {
    this.currentExternalAnalysis = analysis;
  }

  setCurrentPointAnalysis(analysis: IAnalysis | undefined) {
    this.currentPointAnalysis = analysis;
  }

  serCurrentPointAnalysisAll(analysis: IAnalysisAll | undefined) {
    this.currentPointAnalysisAll = analysis;
  }

  setExternalLoading(isLoading: boolean) {
    this.isExternalLoading = isLoading;
  }

  setPointLoading(isLoading: boolean) {
    this.isPointLoading = isLoading;
  };

  async externalAnalysis(vvp: string) {
    this.setExternalLoading(true);
    try {
      const response = await AnalysisServices.externalAnalysis(vvp);
      this.setCurrentExternalAnalysis(response.data);
      console.log(response.data)
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
      this.serCurrentPointAnalysisAll(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.setPointLoading(false);
    }
  }

  async pointAnalysisId(id: string) {
    this.setPointLoading(true);
    try {
      const response = await AnalysisServices.pointAnalysisId(id);
      this.setCurrentPointAnalysis(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.setPointLoading(false);
    }
  }

  async pointAnalysisBehavior(type: string) {
    this.setPointLoading(true);
    try {
      const response = await AnalysisServices.pointAnalysisBehavior(type);
      this.serCurrentPointAnalysisAll(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.setPointLoading(false);
    }
  }
}