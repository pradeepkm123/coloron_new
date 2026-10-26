import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { X, Plus, Download, ChevronRight, Check } from "lucide-react";
import { fetchProducts } from "../api/client";

// Comprehensive Technical Parameters Specs matching the reference comparison screenshot
const DEFAULT_COMPARE_PRODUCTS = [
  {
    id: "ds-2cd23126g3-i2uy",
    model: "DS-2CD23126G3-I2UY",
    name: "12MP Acusense Powered by DarkFighter Fixed Turret Network Camera",
    image: "/images/cctv_turret_catalog.jpg",
    specs: {
      "Image Sensor": '1/1.8" Progressive Scan CMOS',
      "Max. Resolution": "4608 × 2592",
      "Min. Illumination": "Color: 0.0008 Lux @ (F1.6, AGC ON), B/W: 0 Lux with IR",
      "Shutter Time": "1 s to 1/100,000 s",
      "Day & Night": "IR cut filter",
      "Angle Adjustment": "Pan: 0° to 360°, tilt: 0° to 75°, rotate: 0° to 360°",
      "Lens Type": "Fixed focal lens, 2.8 and 4 mm optional",
      "Focal Length & FOV":
        "2.8 mm, horizontal FOV 94.2°, vertical FOV 51.1°, diagonal FOV 110.2° 4 mm, horizontal FOV 73.1°, vertical FOV 40.2°, diagonal FOV 84.8°",
      "Lens Mount": "M16",
      "Iris Type": "Fixed",
      "Aperture": "F1.6",
      "Depth Of Field": "2.8 mm: 2.9 m to ∞ 4 mm: 3.5 m to ∞",
      "DORI":
        "2.8 mm: D: 117 m, O: 46 m, R: 23 m, I: 11 m 4 mm: D: 148 m, O: 59 m, R: 29 m, I: 14 m",
      "Supplement Light Type": "IR",
      "Supplement Light Range": "Up to 30 m",
      "Smart Supplement Light": "Yes",
      "IR Wavelength": "850 nm",
      "Main Stream":
        "50 Hz: 20 fps (4608 × 2592) 25 fps (3840 × 2160, 2688 × 1520, 1920 × 1080, 1280 × 720) 60 Hz: 20 fps (4608 × 2592) 30 fps (3840 × 2160, 2688 × 1520, 1920 × 1080, 1280 × 720)",
      "Sub-Stream":
        "50 Hz: 25 fps (1280 × 720, 640 × 480, 640 × 360) 60 Hz: 30 fps (1280 × 720, 640 × 480, 640 × 360)",
      "Third Stream":
        "50 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360) 60 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360) *Third stream is supported under certain settings.",
      "Video Compression":
        "Main stream: H.265/H.264/H.264+/H.265+, Sub-stream: H.265/H.264/MJPEG, Third stream: H.265/H.264",
    },
  },
  {
    id: "ds-2cd23126g3-is2uy-sl",
    model: "DS-2CD23126G3-IS2UY/SL",
    name: "12MP Acusense Strobe Light and Audible Warning Fixed Turret Network Camera",
    image: "/images/cctv_turret_catalog.jpg",
    specs: {
      "Image Sensor": '1/1.8" Progressive Scan CMOS',
      "Max. Resolution": "4608 × 2592",
      "Min. Illumination": "Color: 0.0008 Lux @ (F1.6, AGC ON), B/W: 0 Lux with IR",
      "Shutter Time": "1 s to 1/100,000 s",
      "Day & Night": "IR cut filter",
      "Angle Adjustment": "Pan: 0° to 360°, tilt: 0° to 75°, rotate: 0° to 360°",
      "Lens Type": "Fixed focal lens, 2.8 and 4 mm optional",
      "Focal Length & FOV":
        "2.8 mm, horizontal FOV 94.2°, vertical FOV 51.1°, diagonal FOV 110.2° 4 mm, horizontal FOV 73.1°, vertical FOV 40.2°, diagonal FOV 84.8°",
      "Lens Mount": "M16",
      "Iris Type": "Fixed",
      "Aperture": "F1.6",
      "Depth Of Field": "2.8 mm: 2.9 m to ∞ 4 mm: 3.5 m to ∞",
      "DORI":
        "2.8 mm: D: 117 m, O: 46 m, R: 23 m, I: 11 m 4 mm: D: 148 m, O: 59 m, R: 29 m, I: 14 m",
      "Supplement Light Type": "IR",
      "Supplement Light Range": "Up to 30 m",
      "Smart Supplement Light": "Yes",
      "IR Wavelength": "850 nm",
      "Main Stream":
        "50 Hz: 20 fps (4608 × 2592) 25 fps (3840 × 2160, 2688 × 1520, 1920 × 1080, 1280 × 720) 60 Hz: 20 fps (4608 × 2592) 30 fps (3840 × 2160, 2688 × 1520, 1920 × 1080, 1280 × 720)",
      "Sub-Stream":
        "50 Hz: 25 fps (1280 × 720, 640 × 480, 640 × 360) 60 Hz: 30 fps (1280 × 720, 640 × 480, 640 × 360)",
      "Third Stream":
        "50 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360) 60 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360) *Third stream is supported under certain settings.",
      "Video Compression":
        "Main stream: H.265/H.264/H.264+/H.265+, Sub-stream: H.265/H.264/MJPEG, Third stream: H.265/H.264",
    },
  },
  {
    id: "ds-2cd23166g3-is2uy-srb",
    model: "DS-2CD23166G3-IS2UY/SRB",
    name: "16MP Acusense Strobe Light and Audible Warning Fixed Turret Network Camera",
    image: "/images/cctv_turret_catalog.jpg",
    specs: {
      "Image Sensor": '1/1.8" Progressive Scan CMOS',
      "Max. Resolution": "4608 × 3456",
      "Min. Illumination": "Color: 0.0008 Lux @ (F1.6, AGC ON), B/W: 0 Lux with IR",
      "Shutter Time": "1 s to 1/100,000 s",
      "Day & Night": "IR cut filter",
      "Angle Adjustment": "Pan: 0° to 360°, tilt: 0° to 75°, rotate: 0° to 360°",
      "Lens Type": "Fixed focal lens, 2.8 and 4 mm optional",
      "Focal Length & FOV":
        "2.8 mm, horizontal FOV 94.5°, vertical FOV 69.9°, diagonal FOV 123.2° 4 mm, horizontal FOV 73.3°, vertical FOV 54.7°, diagonal FOV 94°",
      "Lens Mount": "M16",
      "Iris Type": "Fixed",
      "Aperture": "F1.6",
      "Depth Of Field": "2.8 mm: 2.9 m to ∞ 4 mm: 3.5 m to ∞",
      "DORI":
        "2.8 mm: D: 117 m, O: 46 m, R: 23 m, I: 11 m 4 mm: D: 148 m, O: 59 m, R: 29 m, I: 14 m",
      "Supplement Light Type": "IR",
      "Supplement Light Range": "Up to 30 m",
      "Smart Supplement Light": "Yes",
      "IR Wavelength": "850 nm",
      "Main Stream":
        "50 Hz: 12.5 fps (4608 × 3456) 20 fps (4608 × 2592) 25 fps (3840 × 2160, 3200 × 1800, 2688 × 1520, 1920 × 1080, 1280 × 720) 60 Hz: 15 fps (4608 × 3456) 20 fps (4608 × 2592) 30 fps (3840 × 2160, 3200 × 1800, 2688 × 1520, 1920 × 1080, 1280 × 720)",
      "Sub-Stream":
        "50 Hz: 25 fps (1280 × 720, 640 × 480, 640 × 360) 60 Hz: 30 fps (1280 × 720, 640 × 480, 640 × 360)",
      "Third Stream":
        "50 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360) 60 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360) *Third stream is supported under certain settings.",
      "Video Compression":
        "Main stream: H.265/H.264/H.264+/H.265+, Sub-stream: H.265/H.264/MJPEG, Third stream: H.265/H.264",
    },
  },
  {
    id: "ds-2ce67dv3t-ptls",
    model: "DS-2CE67DV3T-PTLS",
    name: "2MP ColorVu 3.0 Fixed PT Camera",
    image: "/images/cctv_pt_camera.jpg",
    specs: {
      "Image Sensor": '1/2.8" Progressive Scan CMOS',
      "Max. Resolution": "1920 × 1080",
      "Min. Illumination": "Color: 0.0005 Lux @ (F1.0, AGC ON), 0 Lux with white light",
      "Shutter Time": "1/25 s to 1/50,000 s",
      "Day & Night": "24/7 Color",
      "Angle Adjustment": "Pan: 0° to 350°, tilt: 0° to 90°",
      "Lens Type": "Fixed focal lens, 2.8 mm",
      "Focal Length & FOV": "2.8 mm: horizontal FOV 105°, vertical FOV 57°, diagonal FOV 126°",
      "Lens Mount": "M12",
      "Iris Type": "Fixed",
      "Aperture": "F1.0",
      "Depth Of Field": "2.8 mm: 1.5 m to ∞",
      "DORI": "2.8 mm: D: 42 m, O: 16 m, R: 8 m, I: 4 m",
      "Supplement Light Type": "White Light",
      "Supplement Light Range": "Up to 30 m",
      "Smart Supplement Light": "Yes",
      "IR Wavelength": "N/A (White Light)",
      "Main Stream": "1080p @ 30 fps",
      "Sub-Stream": "D1 @ 30 fps",
      "Third Stream": "N/A",
      "Video Compression": "H.265+ / H.264+",
    },
  },
];

const PARAM_KEYS = [
  "Image Sensor",
  "Max. Resolution",
  "Min. Illumination",
  "Shutter Time",
  "Day & Night",
  "Angle Adjustment",
  "Lens Type",
  "Focal Length & FOV",
  "Lens Mount",
  "Iris Type",
  "Aperture",
  "Depth Of Field",
  "DORI",
  "Supplement Light Type",
  "Supplement Light Range",
  "Smart Supplement Light",
  "IR Wavelength",
  "Main Stream",
  "Sub-Stream",
  "Third Stream",
  "Video Compression",
];

export default function Compare() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filterMode, setFilterMode] = useState("all"); // 'diff' | 'all'
  const [availableProducts, setAvailableProducts] = useState(DEFAULT_COMPARE_PRODUCTS);

  useEffect(() => {
    // 1. Try reading from query params or localStorage
    const modelsParam = searchParams.get("models") || searchParams.get("ids");
    let initialList = [];

    if (modelsParam) {
      const modelKeys = modelsParam.split(",").map((s) => s.trim().toLowerCase());
      initialList = DEFAULT_COMPARE_PRODUCTS.filter(
        (p) =>
          modelKeys.includes(p.model.toLowerCase()) ||
          modelKeys.includes(p.id.toLowerCase())
      );
    }

    if (initialList.length === 0) {
      try {
        const stored = localStorage.getItem("coloron_compare_items");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            initialList = parsed.slice(0, 4).map((p) => {
              // Match with full specs if exists or construct
              const found = DEFAULT_COMPARE_PRODUCTS.find(
                (d) => d.model.toLowerCase() === (p.model || "").toLowerCase()
              );
              if (found) return found;
              return {
                id: p.id || p.model,
                model: p.model || p.name,
                name: p.name || p.model,
                image: p.image || "/images/cctv_turret_catalog.jpg",
                specs: {
                  "Image Sensor": '1/1.8" Progressive Scan CMOS',
                  "Max. Resolution": p.resolution || "4608 × 2592",
                  "Min. Illumination": "Color: 0.0008 Lux @ (F1.6, AGC ON)",
                  "Shutter Time": "1 s to 1/100,000 s",
                  "Day & Night": "IR cut filter",
                  "Angle Adjustment": "Pan: 0° to 360°, tilt: 0° to 75°",
                  "Lens Type": p.lensType || "Fixed focal lens",
                  "Focal Length & FOV": "2.8 mm, horizontal FOV 94.2°",
                  "Lens Mount": "M16",
                  "Iris Type": "Fixed",
                  "Aperture": "F1.6",
                  "Depth Of Field": "2.8 mm: 2.9 m to ∞",
                  "DORI": "2.8 mm: D: 117 m, O: 46 m, R: 23 m, I: 11 m",
                  "Supplement Light Type": p.supplementalLight || "IR",
                  "Supplement Light Range": p.irDistance || "Up to 30 m",
                  "Smart Supplement Light": "Yes",
                  "IR Wavelength": "850 nm",
                  "Main Stream": "50 Hz: 20 fps, 60 Hz: 25 fps",
                  "Sub-Stream": "50 Hz: 25 fps, 60 Hz: 30 fps",
                  "Third Stream": "Supported under certain settings",
                  "Video Compression": "H.265 / H.264 / MJPEG",
                },
              };
            });
          }
        }
      } catch (e) {}
    }

    // Default to the 3 turret cameras from the reference screenshot if nothing provided
    if (initialList.length === 0) {
      initialList = DEFAULT_COMPARE_PRODUCTS.slice(0, 3);
    }

    // Ensure maximum 4 products
    setSelectedProducts(initialList.slice(0, 4));
  }, [searchParams]);

  const handleRemove = (model) => {
    const updated = selectedProducts.filter((p) => p.model !== model);
    setSelectedProducts(updated);
    try {
      localStorage.setItem("coloron_compare_items", JSON.stringify(updated));
    } catch (e) {}
  };

  const handleAdd = (model) => {
    if (selectedProducts.length >= 4) {
      alert("You can compare up to 4 products only.");
      return;
    }
    const toAdd = DEFAULT_COMPARE_PRODUCTS.find((p) => p.model === model);
    if (toAdd && !selectedProducts.some((p) => p.model === toAdd.model)) {
      const updated = [...selectedProducts, toAdd];
      setSelectedProducts(updated);
      try {
        localStorage.setItem("coloron_compare_items", JSON.stringify(updated));
      } catch (e) {}
    }
  };

  // Determine which parameters have differences across the selected products
  const differingKeys = useMemo(() => {
    const diffs = new Set();
    if (selectedProducts.length <= 1) return diffs;

    PARAM_KEYS.forEach((key) => {
      const firstVal = selectedProducts[0]?.specs?.[key] || "";
      const isDiff = selectedProducts.some(
        (p) => (p.specs?.[key] || "") !== firstVal
      );
      if (isDiff) {
        diffs.add(key);
      }
    });

    return diffs;
  }, [selectedProducts]);

  // Parameters to display based on radio filter
  const displayedKeys = useMemo(() => {
    if (filterMode === "diff") {
      return PARAM_KEYS.filter((key) => differingKeys.has(key));
    }
    return PARAM_KEYS;
  }, [filterMode, differingKeys]);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="product-comparison-page">
      {/* TOP HEADER */}
      <div className="comparison-header-container">
        <div className="comparison-title-wrap">
          <h1 className="comparison-page-title">Product Comparison</h1>
        </div>
        <div className="comparison-download-wrap">
          <button
            type="button"
            className="comparison-download-btn"
            onClick={handleDownload}
            title="Download specification matrix"
          >
            DOWNLOAD
          </button>
        </div>
      </div>

      {/* MATRIX TABLE CONTAINER */}
      <div className="comparison-table-container">
        <table className="comparison-matrix-table">
          <thead>
            {/* Top Cards Row */}
            <tr>
              {/* Left Column Header with Radio Filter */}
              <th className="th-tech-params-header">
                <div className="tech-params-title">Technical Parameters</div>
                <div className="tech-params-radios">
                  <label
                    className="param-radio-label"
                    onClick={() => setFilterMode("diff")}
                  >
                    <span
                      className={`custom-comp-radio ${
                        filterMode === "diff" ? "checked" : ""
                      }`}
                    />
                    <span>Highlights Differences</span>
                  </label>
                  <label
                    className="param-radio-label"
                    onClick={() => setFilterMode("all")}
                  >
                    <span
                      className={`custom-comp-radio ${
                        filterMode === "all" ? "checked" : ""
                      }`}
                    />
                    <span>All Parameters</span>
                  </label>
                </div>
              </th>

              {/* 4 Product Slots (Columns) */}
              {[0, 1, 2, 3].map((slotIdx) => {
                const prod = selectedProducts[slotIdx];
                if (prod) {
                  const isPrimary = slotIdx === 0;
                  return (
                    <th key={prod.model} className="th-prod-card">
                      <div className="prod-card-cell">
                        {/* Remove Button */}
                        {selectedProducts.length > 1 && (
                          <button
                            type="button"
                            className="comp-card-remove-btn"
                            onClick={() => handleRemove(prod.model)}
                            title="Remove from comparison"
                          >
                            <X size={14} />
                          </button>
                        )}

                        {/* Product Image */}
                        <div className="comp-card-img-wrap">
                          <img
                            src={prod.image}
                            alt={prod.model}
                            className="comp-card-img"
                          />
                        </div>

                        {/* Red Badge */}
                        <div className="comp-card-badge-row">
                          {isPrimary ? (
                            <span className="badge-selected-prod">
                              Selected Product
                            </span>
                          ) : (
                            <span className="badge-compare-tag">COMPARE</span>
                          )}
                        </div>

                        {/* Model & Name */}
                        <div className="comp-card-model">{prod.model}</div>
                        <div className="comp-card-sub">{prod.name}</div>
                      </div>
                    </th>
                  );
                }

                // Empty Slot
                return (
                  <th key={`empty-col-${slotIdx}`} className="th-prod-card empty">
                    <div className="add-prod-slot-box">
                      <div className="add-prod-text">Add product to compare</div>
                      <select
                        className="add-prod-select"
                        value=""
                        onChange={(e) => {
                          if (e.target.value) handleAdd(e.target.value);
                        }}
                      >
                        <option value="" disabled>
                          + Select Camera...
                        </option>
                        {DEFAULT_COMPARE_PRODUCTS.filter(
                          (dp) => !selectedProducts.some((p) => p.model === dp.model)
                        ).map((dp) => (
                          <option key={dp.model} value={dp.model}>
                            {dp.model}
                          </option>
                        ))}
                      </select>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* Specification Rows */}
          <tbody>
            {displayedKeys.map((key) => {
              const isDiffRow = differingKeys.has(key);
              return (
                <tr key={key} className={isDiffRow ? "row-diff-highlight" : ""}>
                  {/* Parameter Label (Left Dark Column) */}
                  <td className="td-param-label">{key}</td>

                  {/* 4 Product Value Cells */}
                  {[0, 1, 2, 3].map((slotIdx) => {
                    const prod = selectedProducts[slotIdx];
                    if (prod) {
                      const val = prod.specs?.[key] || "—";
                      return (
                        <td
                          key={`${prod.model}-${key}`}
                          className={`td-param-value ${
                            isDiffRow ? "cell-diff-highlight" : ""
                          }`}
                        >
                          {val}
                        </td>
                      );
                    }
                    return (
                      <td
                        key={`empty-cell-${slotIdx}-${key}`}
                        className="td-param-value empty"
                      >
                        —
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* STYLES */}
      <style>{`
        .product-comparison-page {
          min-height: 100vh;
          background-color: #ffffff;
          padding-top: 80px;
          padding-bottom: 80px;
          color: #333333;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .comparison-header-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 32px) 28px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .comparison-page-title {
          font-size: clamp(20px, 3.5vw, 26px);
          font-weight: 700;
          color: #222222;
          margin: 0;
          text-align: center;
        }

        .comparison-download-wrap {
          position: absolute;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
        }

        .comparison-download-btn {
          background-color: #d32f2f;
          color: #ffffff;
          border: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 7px 22px;
          border-radius: 18px;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .comparison-download-btn:hover {
          background-color: #b71c1c;
        }

        /* TABLE CONTAINER */
        .comparison-table-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 32px);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .comparison-matrix-table {
          width: 100%;
          min-width: 860px;
          border-collapse: collapse;
          table-layout: fixed;
          background: #ffffff;
        }

        @media (max-width: 640px) {
          .comparison-header-container {
            flex-direction: column;
            gap: 16px;
          }
          .comparison-download-wrap {
            position: static;
            transform: none;
          }
        }

        /* TABLE HEADER */
        .th-tech-params-header {
          width: 220px;
          background-color: #3a3b40;
          color: #ffffff;
          padding: 24px 18px;
          text-align: left;
          vertical-align: top;
          border: 1px solid #48494f;
        }

        .tech-params-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .tech-params-radios {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .param-radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
        }

        .custom-comp-radio {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background-color: transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .custom-comp-radio.checked {
          border-color: #ffffff;
        }
        .custom-comp-radio.checked::after {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
        }

        /* PRODUCT CARDS HEADER */
        .th-prod-card {
          width: calc((100% - 220px) / 4);
          vertical-align: top;
          padding: 16px;
          border: 1px solid #e0e0e0;
          background: #ffffff;
          font-weight: normal;
          position: relative;
        }

        .prod-card-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .comp-card-remove-btn {
          position: absolute;
          top: -6px;
          right: -6px;
          background: transparent;
          border: none;
          color: #777777;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.15s;
        }
        .comp-card-remove-btn:hover {
          color: #d32f2f;
        }

        .comp-card-img-wrap {
          width: 100%;
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .comp-card-img {
          max-height: 120px;
          max-width: 150px;
          object-fit: contain;
        }

        .comp-card-badge-row {
          margin-bottom: 8px;
        }

        .badge-selected-prod {
          background-color: #d32f2f;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 12px;
          display: inline-block;
        }

        .badge-compare-tag {
          background-color: #d32f2f;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 12px;
          display: inline-block;
        }

        .comp-card-model {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .comp-card-sub {
          font-size: 11px;
          color: #666666;
          line-height: 1.4;
          min-height: 32px;
        }

        /* EMPTY SLOT BOX */
        .add-prod-slot-box {
          height: 190px;
          border: 1px dashed #d2d2d7;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px;
        }
        .add-prod-text {
          font-size: 13px;
          color: #777777;
          font-weight: 500;
        }
        .add-prod-select {
          width: 100%;
          max-width: 180px;
          padding: 6px 8px;
          font-size: 12px;
          border: 1px solid #d2d2d7;
          border-radius: 4px;
          background: #ffffff;
          color: #333333;
          outline: none;
          cursor: pointer;
        }

        /* PARAMETER ROWS */
        .td-param-label {
          background-color: #4a4b52;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          padding: 14px 18px;
          border: 1px solid #585960;
          vertical-align: top;
          line-height: 1.4;
        }

        .td-param-value {
          background-color: #ffffff;
          color: #333333;
          font-size: 11.5px;
          line-height: 1.5;
          padding: 14px 16px;
          border: 1px solid #e0e0e0;
          vertical-align: top;
        }
        .td-param-value.empty {
          color: #aaaaaa;
          text-align: center;
        }

        /* DIFFERENCE HIGHLIGHT (CREAM / SOFT YELLOW) */
        .cell-diff-highlight {
          background-color: #fffde7 !important;
        }
      `}</style>
    </div>
  );
}
