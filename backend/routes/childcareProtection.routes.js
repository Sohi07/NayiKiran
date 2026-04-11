import express from "express";
import {
    getAllChildcareProtectionModules,
    getModulesByCategory,
    getModuleById,
    getSchoolEnrollmentGuide,
    getGovernmentSchemes,
    getChildRightsFramework,
    getExploitationPrevention,
    searchModules,
    createChildcareProtectionModule
} from "../controllers/childcareProtection.controller.js";

const router = express.Router();

// Get all modules
router.get("/", getAllChildcareProtectionModules);

// Get modules by category
router.get("/category/:category", getModulesByCategory);

// Get specific module by ID
router.get("/:id", getModuleById);

// Search modules
router.get("/search/:query", searchModules);

// Get school enrollment guide
router.get("/school-enrollment", getSchoolEnrollmentGuide);

// Get government schemes
router.get("/government-schemes", getGovernmentSchemes);

// Get child rights framework
router.get("/child-rights", getChildRightsFramework);

// Get exploitation prevention resources
router.get("/exploitation-prevention", getExploitationPrevention);

// Create new module (admin only)
router.post("/", createChildcareProtectionModule);

export default router;
