import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const Scroll = ({ route, navigation }) => {
    const studentName = route?.params?.studentName ?? 'Student';
    const companyName = route?.params?.companyName ?? 'Company';

    const skills = [
        'React',
        'React Native',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'GraphQL',
    ];

    const projects = [
        'Project A',
        'Project B',
        'Project C',
        'Project D',
    ];

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.greetingCard}>
                    <Text style={styles.greetingTitle}>Hello, {studentName} </Text>
                    <Text style={styles.greetingSubtitle}>{companyName}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <Text style={styles.sectionText}>
                        This screen receives the student's name and company from route.params and
                        displays them above. Add a short bio or description here.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.horizontalContent}
                        // On Android, inner horizontal ScrollViews can conflict with outer vertical
                        // scrolling. Setting nestedScrollEnabled allows the horizontal scroll to
                        // receive touch events when the user swipes horizontally.
                        nestedScrollEnabled={true}
                    >
                        {skills.map((s, i) => (
                            <View style={styles.skillCard} key={i}>
                                <Text style={styles.skillText}>{s}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Projects</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.horizontalContent}
                        nestedScrollEnabled={true}
                    >
                        {projects.map((p, i) => (
                            <View style={styles.projectCard} key={i}>
                                <Text style={styles.projectTitle}>{p}</Text>
                                <Text style={styles.projectDesc}>A short description of the project.</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#fff' },
    container: { padding: 16, paddingBottom: 40 },
    greetingCard: {
        backgroundColor: '#ad781c',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    greetingTitle: { fontSize: 18, fontWeight: '700', marginBottom: 4 },
    greetingSubtitle: { fontSize: 14, color: '#302c2c' },
    section: { marginBottom: 20 },
    sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
    sectionText: { fontSize: 14, color: '#333' },
    horizontalContent: { paddingVertical: 8 },
    skillCard: {
        backgroundColor: '#ad781c',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginRight: 12,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    skillText: { fontSize: 14, fontWeight: '600' },
    projectCard: {
        backgroundColor: '#ad781c',
        width: Math.min(300, width * 0.8),
        padding: 12,
        borderRadius: 8,
        marginRight: 12,
    },
    projectTitle: { fontSize: 15, fontWeight: '700', marginBottom: 6 },
    projectDesc: { fontSize: 13, color: '#444' },
    button: {
        marginTop: 8,
        backgroundColor: 'green',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontWeight: '700' },
});

export default Scroll;