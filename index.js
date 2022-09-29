import React, { useState } from 'react'

function useForm(previousData = {}, previousErrors = {}) {
    const [formData, setFormData] = useState(previousData);
    const [errors, setErrors] = useState(previousErrors);
    const [loading, setLoading] = useState(false)

    function handleChange(name, value) {
        setFormData(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    function reset() {
        setFormData({})
    }
    return {
        formData,
        handleChange,
        reset,
        errors,
        setErrors,
        loading,
        setLoading
    }
}

export default useForm