import { makeAutoObservable } from "mobx";
import AnalysisServices from "../services/AnalysisServices";

export default class AnalysisStore {
  isExternalLoading = false;
  isPointLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setExternalLoading(isLoading: boolean) {
    this.isExternalLoading = isLoading;
  };

  setPointLoading(isLoading: boolean) {
    this.isPointLoading = isLoading;
  };

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
      
    } catch (error) {
      console.log(error);
    } finally {
      this.setPointLoading(false);
    }
  }
}