import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Compare from './pages/Compare';
import Solutions from './pages/Solutions';
import ApartmentSolution from './pages/ApartmentSolution';
import FactorySolution from './pages/FactorySolution';
import ClassroomSolution from './pages/ClassroomSolution';
import UrbanRoadwaysSolution from './pages/UrbanRoadwaysSolution';
import OfficeSolution from './pages/OfficeSolution';
import SupermarketSolution from './pages/SupermarketSolution';
import BusStopSolution from './pages/BusStopSolution';
import CarDealershipsSolution from './pages/CarDealershipsSolution';
import ConferenceRoomsSolution from './pages/ConferenceRoomsSolution';
import ConstructionSiteSolution from './pages/ConstructionSiteSolution';
import ElectricalSubstationsSolution from './pages/ElectricalSubstationsSolution';
import GasStationsSolution from './pages/GasStationsSolution';
import HighwaysSolution from './pages/HighwaysSolution';
import HotelsSolution from './pages/HotelsSolution';
import MonitoringCenterSolution from './pages/MonitoringCenterSolution';
import ParkingLotsSolution from './pages/ParkingLotsSolution';
import SchoolsSolution from './pages/SchoolsSolution';
import ShoppingMallsSolution from './pages/ShoppingMallsSolution';
import TransitBusOnboardSolution from './pages/TransitBusOnboardSolution';
import WarehousesSolution from './pages/WarehousesSolution';
import OnshoreOilfieldsSolution from './pages/OnshoreOilfieldsSolution';
import OffshoreOilPlatformSolution from './pages/OffshoreOilPlatformSolution';
import TransmissionLineInspectionSolution from './pages/TransmissionLineInspectionSolution';
import PipelineInspectionSolution from './pages/PipelineInspectionSolution';
import SolarFarmsSolution from './pages/SolarFarmsSolution';
import HydroelectricPowerPlantsSolution from './pages/HydroelectricPowerPlantsSolution';
import SpeedMeasurementSolution from './pages/SpeedMeasurementSolution';
import IncidentDetectionSolution from './pages/IncidentDetectionSolution';
import ViolationDetectionSolution from './pages/ViolationDetectionSolution';
import VehicleInformationDetectionSolution from './pages/VehicleInformationDetectionSolution';
import PortableEnforcementSolution from './pages/PortableEnforcementSolution';
import PerimeterProtectionSolution from './pages/PerimeterProtectionSolution';
import TimeAttendanceSolution from './pages/TimeAttendanceSolution';
import AccessControlSolution from './pages/AccessControlSolution';
import PeopleCountingSolution from './pages/PeopleCountingSolution';
import VisualParcelTrackingSolution from './pages/VisualParcelTrackingSolution';
import VisitorManagementSolution from './pages/VisitorManagementSolution';
import LineHaulManagementSolution from './pages/LineHaulManagementSolution';
import StudentAttendanceSolution from './pages/StudentAttendanceSolution';
import DockManagementSolution from './pages/DockManagementSolution';
import DistanceLearningSolution from './pages/DistanceLearningSolution';
import InformationDisplaySolution from './pages/InformationDisplaySolution';
import RemoteClassroomInspectionSolution from './pages/RemoteClassroomInspectionSolution';
import IntelligentInspectionSolution from './pages/IntelligentInspectionSolution';
import AdvancedDrivingAssistanceSolution from './pages/AdvancedDrivingAssistanceSolution';
import IndustrialThermographySolution from './pages/IndustrialThermographySolution';
import Support from './pages/Support';
import QuoteCalculator from './pages/QuoteCalculator';
import Technologies from './pages/Technologies';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import CategoryProducts from './pages/CategoryProducts';
import AiKnowledge from './pages/AiKnowledge';

export default function AppRoutes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/category/:categorySlug" element={<CategoryProducts />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/apartments" element={<ApartmentSolution />} />
          <Route path="/solutions/factories" element={<FactorySolution />} />
          <Route path="/solutions/classroom-hub" element={<ClassroomSolution />} />
          <Route path="/solutions/urban-roadways" element={<UrbanRoadwaysSolution />} />
          <Route path="/solutions/offices" element={<OfficeSolution />} />
          <Route path="/solutions/supermarkets" element={<SupermarketSolution />} />
          <Route path="/solutions/stores" element={<SupermarketSolution />} />
          <Route path="/solutions/bus-stop" element={<BusStopSolution />} />
          <Route path="/solutions/car-dealerships" element={<CarDealershipsSolution />} />
          <Route path="/solutions/conference-rooms" element={<ConferenceRoomsSolution />} />
          <Route path="/solutions/construction-site" element={<ConstructionSiteSolution />} />
          <Route path="/solutions/electrical-substations" element={<ElectricalSubstationsSolution />} />
          <Route path="/solutions/gas-stations" element={<GasStationsSolution />} />
          <Route path="/solutions/highways" element={<HighwaysSolution />} />
          <Route path="/solutions/hotels" element={<HotelsSolution />} />
          <Route path="/solutions/monitoring-center" element={<MonitoringCenterSolution />} />
          <Route path="/solutions/parking-lots" element={<ParkingLotsSolution />} />
          <Route path="/solutions/schools" element={<SchoolsSolution />} />
          <Route path="/solutions/shopping-malls" element={<ShoppingMallsSolution />} />
          <Route path="/solutions/transit-bus-onboard" element={<TransitBusOnboardSolution />} />
          <Route path="/solutions/transit-bus-on-board" element={<TransitBusOnboardSolution />} />
          <Route path="/solutions/warehouses" element={<WarehousesSolution />} />
          <Route path="/solutions/onshore-oilfields" element={<OnshoreOilfieldsSolution />} />
          <Route path="/solutions/onshore-oilfield" element={<OnshoreOilfieldsSolution />} />
          <Route path="/solutions/offshore-oil-platform" element={<OffshoreOilPlatformSolution />} />
          <Route path="/solutions/offshore-oil" element={<OffshoreOilPlatformSolution />} />
          <Route path="/solutions/transmission-line-inspection" element={<TransmissionLineInspectionSolution />} />
          <Route path="/solutions/transmission-lines" element={<TransmissionLineInspectionSolution />} />
          <Route path="/solutions/pipeline-inspection" element={<PipelineInspectionSolution />} />
          <Route path="/solutions/pipeline" element={<PipelineInspectionSolution />} />
          <Route path="/solutions/solar-farms" element={<SolarFarmsSolution />} />
          <Route path="/solutions/solar-farm" element={<SolarFarmsSolution />} />
          <Route path="/solutions/hydroelectric-power-plants" element={<HydroelectricPowerPlantsSolution />} />
          <Route path="/solutions/hydro-plants" element={<HydroelectricPowerPlantsSolution />} />
          <Route path="/solutions/speed-measurement" element={<SpeedMeasurementSolution />} />
          <Route path="/solutions/incident-detection" element={<IncidentDetectionSolution />} />
          <Route path="/solutions/intrusion-detection" element={<IncidentDetectionSolution />} />
          <Route path="/solutions/violation-detection" element={<ViolationDetectionSolution />} />
          <Route path="/solutions/vehicle-information-detection" element={<VehicleInformationDetectionSolution />} />
          <Route path="/solutions/vehicle-info" element={<VehicleInformationDetectionSolution />} />
          <Route path="/solutions/portable-enforcement" element={<PortableEnforcementSolution />} />
          <Route path="/solutions/portable" element={<PortableEnforcementSolution />} />
          <Route path="/solutions/perimeter-protection" element={<PerimeterProtectionSolution />} />
          <Route path="/solutions/perimeter" element={<PerimeterProtectionSolution />} />
          <Route path="/solutions/time-attendance" element={<TimeAttendanceSolution />} />
          <Route path="/solutions/time-and-attendance" element={<TimeAttendanceSolution />} />
          <Route path="/solutions/access-control" element={<AccessControlSolution />} />
          <Route path="/solutions/access" element={<AccessControlSolution />} />
          <Route path="/solutions/people-counting" element={<PeopleCountingSolution />} />
          <Route path="/solutions/people" element={<PeopleCountingSolution />} />
          <Route path="/solutions/entrance-exit" element={<VisualParcelTrackingSolution />} />
          <Route path="/solutions/entrance-and-exit-management" element={<VisualParcelTrackingSolution />} />
          <Route path="/solutions/visual-parcel-tracking" element={<VisualParcelTrackingSolution />} />
          <Route path="/solutions/parcel-tracking" element={<VisualParcelTrackingSolution />} />
          <Route path="/solutions/visual-parcel" element={<VisualParcelTrackingSolution />} />
          <Route path="/solutions/visitor-management" element={<VisitorManagementSolution />} />
          <Route path="/solutions/visitor" element={<VisitorManagementSolution />} />
          <Route path="/solutions/line-haul-management" element={<LineHaulManagementSolution />} />
          <Route path="/solutions/line-haul" element={<LineHaulManagementSolution />} />
          <Route path="/solutions/student-attendance" element={<StudentAttendanceSolution />} />
          <Route path="/solutions/student" element={<StudentAttendanceSolution />} />
          <Route path="/solutions/dock-management" element={<DockManagementSolution />} />
          <Route path="/solutions/dock" element={<DockManagementSolution />} />
          <Route path="/solutions/distance-learning" element={<DistanceLearningSolution />} />
          <Route path="/solutions/distance" element={<DistanceLearningSolution />} />
          <Route path="/solutions/information-display" element={<InformationDisplaySolution />} />
          <Route path="/solutions/information" element={<InformationDisplaySolution />} />
          <Route path="/solutions/remote-classroom-inspection" element={<RemoteClassroomInspectionSolution />} />
          <Route path="/solutions/remote-classroom" element={<RemoteClassroomInspectionSolution />} />
          <Route path="/solutions/intelligent-inspection" element={<IntelligentInspectionSolution />} />
          <Route path="/solutions/intelligent" element={<IntelligentInspectionSolution />} />
          <Route path="/solutions/advanced-driving-assistance" element={<AdvancedDrivingAssistanceSolution />} />
          <Route path="/solutions/adas" element={<AdvancedDrivingAssistanceSolution />} />
          <Route path="/solutions/industrial-thermography" element={<IndustrialThermographySolution />} />
          <Route path="/solutions/thermography" element={<IndustrialThermographySolution />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/support" element={<Support />} />
          <Route path="/quote-calculator" element={<QuoteCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ai-knowledge" element={<AiKnowledge />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
