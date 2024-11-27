import { supabase } from './supabase'; 

export const fetchBusData = async () => {
    try {
        const { data, error } = await supabase
            .from('bus')
            .select(`
                bus_id,
                line,
                name,
                user_id,
                user (
                    interprisename
                )
            `);

        if (error) {
            throw error;
        }

        return data; 
    } catch (error) {
        console.error('Erro ao buscar dados de ônibus:', error.message);
        throw error; 
    }
};