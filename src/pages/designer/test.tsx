"use client";

import styles from "./test.module.css";
import { ReactSVG } from "react-svg";
import React, { useState } from "react";

import Image from "next/image";
import Button from "@/components/Button/Button";

import patterns from "@/utility/patternDatabase";

import { Measurements } from "@/lib/types";


export default function PatternSelector() {
    const [attributesShown, setAttributesShown] = useState<boolean>(false);
    const [currentPattern, setCurrentPattern] = useState<number | null>(null);
    const [bodyMeasurements, setBodyMeasurment] = useState<Measurements | null>(null);
  
    const handlePatternChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrentPattern(Number(event.target.value));
    };
  
    // {console.log("pattern src :" + patterns.find(p => p.patternid === currentPattern)?.file)}

    const setPattern = () => {
        setAttributesShown(true);

        const patternDefaultMeasurements = patterns.find(p => p.patternid === currentPattern)?.defaultMeasurements;

        if (patternDefaultMeasurements) {  
            setBodyMeasurment(patternDefaultMeasurements);

            // console.log(bodyMeasurements);
            // console.log(patternDefaultMeasurements);
        } else {
            setBodyMeasurment(null);  // Explicitly set null if there are no default measurements
        }

    }

    // function calculateNewWidth(InputPatternID: number, Height: number, ShoulderWidth: number, Waist: number, Hip: number) {
    //     var newHeight;
    //     var newShoulderWidth;
    //     var newWaist;
    //     var newHip;

    //     const currentPattern = patterns.find(p => p.patternid === InputPatternID);

    //     if (!currentPattern) {
    //         return;
    //     }

    //     const waistAdjust = currentPattern.waist;

    //     for (let i = 0; i < waistAdjust.length; i++) {
    //         let curr = waistAdjust[i];

    //         const currAttribute = currentPattern.attributes.find(d => d.id === curr);
    //         currAttribute?.properties.x1 -
    //     }

    //     return {
    //         Height: newHeight,
    //         ShoulderWidth: newShoulderWidth,
    //         Waist: newWaist,
    //         Hip: newHip,
    //     }
    // }

    return (
      <>
        <div className={styles.content}>
            <h1>SELECT A PATTERN</h1>
  
            <div className={styles.selectionContainer}>
                <select
                    name="patternSelect"
                    id="patternSelect"
                    onChange={handlePatternChange}
                >
                    <option value="">-- Select a pattern --</option>
                    {patterns.map((i) => (
                        <option key={i.patternid} value={i.patternid}>
                            {i.name}
                        </option>
                    ))}
                </select>
        
                <button
                    onClick={() => setPattern()}
                    disabled={currentPattern === null}
                >
                    Show Attributes for{" "}
                    {currentPattern !== null ? patterns.find(p => p.patternid === currentPattern)?.name : "Select a Pattern"}
                </button>
            </div>

            {attributesShown && currentPattern !== null && (
                <div className={styles.mainContent}>
                    <div>
                        <h2>Attributes for {patterns.find(p => p.patternid === currentPattern)?.name}</h2>

                        {patterns.find(p => p.patternid === currentPattern)?.attributes.map((a) => (
                            <div key={a.id}>
                                {a.id} of type {a.type} = 
                            </div>
                        ))}

                        <h2>Pattern</h2>

                        {currentPattern && patterns.find(p => p.patternid === currentPattern)?.file && (
                            <ReactSVG className={styles.svgImage} src={patterns.find(p => p.patternid === currentPattern)?.file || ''} />
                        )}
                    </div>

                    <div>
                        <h2>Body Measurements</h2>
                        
                        {bodyMeasurements && (
                            <div className={styles.measurementsContainer}>
                                <p>Height</p>
                                <input placeholder={`default: ${bodyMeasurements.height} inches`} />

                                <p>Shoulder Width</p>
                                <input placeholder={`default: ${bodyMeasurements.shoulder_width} inches`} />

                                <p>Waist</p>
                                <input placeholder={`default: ${bodyMeasurements.waist} inches`} />

                                <p>Hip</p>
                                <input placeholder={`default: ${bodyMeasurements.hip} inches`} />

                                <button className={styles.fit_pattern_button}>Fit Pattern</button>
                            </div>
                        )}
                    </div>  
                </div>
            )}
        </div>
      </>
    );
  }

// export default function Home() {
//   const [svgFile, setSvgFile] = useState<string | null>(null);
//   const [attributesArray, setAttributesArray] = useState<Array<{ tagName: string; attributes: { [key: string]: string } }> | null>(null);
//   const [scale, setScale] = useState<number>(1);
//   const [updatedSvgFile, setUpdatedSvgFile] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const result = e.target?.result as string;
//         setSvgFile(result);
//         setUpdatedSvgFile(result); // Initially, the updated SVG is the same as the original

//         const extractedAttributes = extractAttributes(result);
//         setAttributesArray(extractedAttributes);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   function extractAttributes(base64Svg: string | null) {
//     if (base64Svg == null) {
//       console.log("No SVG file found - please input an SVG file.");
//       return null;
//     }
//     const svgData = base64Svg.replace(/^data:image\/svg\+xml;base64,/, '');
//     const decodedSvg = atob(svgData);

//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(decodedSvg, "image/svg+xml");

//     const elements = xmlDoc.querySelectorAll("*");

//     const attributesArray = Array.from(elements).map((element) => {
//       const attributes: { [key: string]: string } = {};
//       Array.from(element.attributes).forEach((attr) => {
//         attributes[attr.name] = attr.value;
//       });
//       return {
//         tagName: element.tagName,
//         attributes: attributes,
//       };
//     });

//     return attributesArray;
//   }

//   const handleAttributeChange = (elementIndex: number, key: string, newValue: string) => {
//     if (attributesArray) {
//       const updatedAttributesArray = [...attributesArray];
//       updatedAttributesArray[elementIndex].attributes[key] = newValue;
//       setAttributesArray(updatedAttributesArray);
//     }
//   };

//   const handleScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setScale(parseFloat(event.target.value));
//   };

//   const updateSvgLive = () => {
//     if (!svgFile || !attributesArray) return;

//     const parser = new DOMParser();
//     const svgData = svgFile.replace(/^data:image\/svg\+xml;base64,/, '');
//     const decodedSvg = atob(svgData);
//     const xmlDoc = parser.parseFromString(decodedSvg, "image/svg+xml");

//     attributesArray.forEach((item, index) => {
//       const element = xmlDoc.getElementsByTagName(item.tagName)[index];
//       if (element) {
//         Object.entries(item.attributes).forEach(([key, value]) => {
//           element.setAttribute(key, value);
//         });
//       }
//     });

//     // Apply the scale transformation
//     const rootElement = xmlDoc.documentElement;
//     rootElement.setAttribute("transform", `scale(${scale})`);

//     // Outline the viewBox
//     const viewBox = rootElement.getAttribute("viewBox");
//     if (viewBox) {
//       const [minX, minY, width, height] = viewBox.split(" ").map(Number);
//       const outline = xmlDoc.createElementNS("http://www.w3.org/2000/svg", "rect");
//       outline.setAttribute("x", minX.toString());
//       outline.setAttribute("y", minY.toString());
//       outline.setAttribute("width", width.toString());
//       outline.setAttribute("height", height.toString());
//       outline.setAttribute("fill", "none");
//       outline.setAttribute("stroke", "red");
//       outline.setAttribute("stroke-width", "5");
//       rootElement.appendChild(outline);
//     }

//     const serializer = new XMLSerializer();
//     const updatedSvgBase64 = `data:image/svg+xml;base64,${btoa(serializer.serializeToString(xmlDoc))}`;
//     setUpdatedSvgFile(updatedSvgBase64);
//   };

//   const saveSvgFile = () => {
//     if (updatedSvgFile) {
//       const downloadLink = document.createElement("a");
//       downloadLink.href = updatedSvgFile;
//       downloadLink.download = "updated_image.svg";
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     }
//   };

//   return (
//     <main className={styles.main}>
//       <div className={styles.inputContainer}>
//         <input className={styles.input} type="file" accept=".svg" onChange={handleFileChange} />
//         {updatedSvgFile && (
//           <ReactSVG src={updatedSvgFile} />
//         )}
//       </div>

//       <div className={styles.scaleContainer}>
//         <label htmlFor="scaleRange">Master Scale: </label>
//         <input
//           type="range"
//           id="scaleRange"
//           min="0.1"
//           max="2"
//           step="0.1"
//           value={scale}
//           onChange={handleScaleChange}
//         />
//         <span>{scale.toFixed(1)}x</span>
//       </div>

//       <div className={styles.attributesContainer}>
//         {attributesArray &&
//           attributesArray.map((attr, elementIndex) => (
//             <div key={elementIndex}>
//               <h3 className={styles.h3}>{attr.tagName}</h3>
//               <ul className={styles.ul}>
//                 {Object.entries(attr.attributes).map(([key, value], attrIndex) => (
//                   <li className={styles.li} key={attrIndex}>
//                     <strong>{key}</strong>:
//                     <input
//                       type="text"
//                       value={value}
//                       onChange={(e) =>
//                         handleAttributeChange(elementIndex, key, e.target.value)
//                       }
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//       </div>

//       <div className={styles.buttonsContainer}>
//         <button onClick={updateSvgLive} className={styles.updateButton}>
//           Update SVG
//         </button>
//         {attributesArray && (
//           <button onClick={saveSvgFile} className={styles.saveButton}>
//             Save Updated SVG
//           </button>
//         )}
//       </div>
//     </main>
//   );
// }
