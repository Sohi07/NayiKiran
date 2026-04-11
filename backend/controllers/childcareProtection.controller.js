import ChildcareProtection from "../models/childcareProtection.model.js";

// Get all childcare protection modules
export const getAllChildcareProtectionModules = async (req, res) => {
    try {
        const modules = await ChildcareProtection.find().sort({ category: 1, difficulty: 1 });
        res.status(200).json(modules);
    } catch (error) {
        console.error("Error fetching childcare protection modules:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get modules by category
export const getModulesByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const modules = await ChildcareProtection.find({ category }).sort({ difficulty: 1 });
        res.status(200).json(modules);
    } catch (error) {
        console.error("Error fetching modules by category:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get specific module by ID
export const getModuleById = async (req, res) => {
    try {
        const { id } = req.params;
        const module = await ChildcareProtection.findById(id);
        
        if (!module) {
            return res.status(404).json({ error: "Module not found" });
        }
        
        res.status(200).json(module);
    } catch (error) {
        console.error("Error fetching module:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get school enrollment guide
export const getSchoolEnrollmentGuide = async (req, res) => {
    try {
        const enrollmentModules = await ChildcareProtection.find({ 
            category: 'school-enrollment' 
        }).select('title schoolEnrollment actionableSteps resources');
        res.status(200).json(enrollmentModules);
    } catch (error) {
        console.error("Error fetching school enrollment guide:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get government schemes
export const getGovernmentSchemes = async (req, res) => {
    try {
        const schemeModules = await ChildcareProtection.find({ 
            category: 'government-schemes' 
        }).select('title governmentSchemes resources');
        res.status(200).json(schemeModules);
    } catch (error) {
        console.error("Error fetching government schemes:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get child rights legal framework
export const getChildRightsFramework = async (req, res) => {
    try {
        const rightsModules = await ChildcareProtection.find({ 
            category: 'child-rights' 
        }).select('title legalFramework resources');
        res.status(200).json(rightsModules);
    } catch (error) {
        console.error("Error fetching child rights framework:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get exploitation prevention resources
export const getExploitationPrevention = async (req, res) => {
    try {
        const preventionModules = await ChildcareProtection.find({ 
            category: 'exploitation-prevention' 
        }).select('title exploitationPrevention resources');
        res.status(200).json(preventionModules);
    } catch (error) {
        console.error("Error fetching exploitation prevention:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Search modules
export const searchModules = async (req, res) => {
    try {
        const { query } = req.query;
        
        if (!query) {
            return res.status(400).json({ error: "Search query is required" });
        }
        
        const modules = await ChildcareProtection.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { tags: { $in: [new RegExp(query, 'i')] } }
            ]
        });
        
        res.status(200).json(modules);
    } catch (error) {
        console.error("Error searching modules:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Create new childcare protection module
export const createChildcareProtectionModule = async (req, res) => {
    try {
        const moduleData = req.body;
        const newModule = new ChildcareProtection(moduleData);
        await newModule.save();
        res.status(201).json(newModule);
    } catch (error) {
        console.error("Error creating module:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default {
    getAllChildcareProtectionModules,
    getModulesByCategory,
    getModuleById,
    getSchoolEnrollmentGuide,
    getGovernmentSchemes,
    getChildRightsFramework,
    getExploitationPrevention,
    searchModules,
    createChildcareProtectionModule
};
